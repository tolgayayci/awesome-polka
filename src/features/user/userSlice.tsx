// ** Redux Toolkit
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// ** Magic SDK
import { Magic } from "magic-sdk";

// ** Types
import type { MagicUserMetadata } from "@magic-sdk/types";

interface IUserState {
  user: MagicUserMetadata | null;
  loginStatus: boolean | null;
}

const initialState: IUserState = {
  user: null,
  loginStatus: null,
};

export const loginWithEmailOTP = createAsyncThunk(
  "user/loginWithEmailOTP",
  async (email: string) => {
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY as string, {
      testMode: true,
    });

    try {
      await magic.auth.loginWithMagicLink({
        email,
      });

      return {
        user: await magic.user.getMetadata(),
        loginStatus: true,
      } as IUserState;
    } catch (error) {
      console.log(error);

      return {
        user: null,
        loginStatus: false,
      } as IUserState;
    }
  }
);

export const checkUserIsAuthenticated = createAsyncThunk(
  "user/checkUserIsAuthenticated",
  async () => {
    //@ts-ignore
    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY as string, {
      testMode: true,
    });

    const userCheck = await magic.user.isLoggedIn();

    if (userCheck) {
      return {
        user: await magic.user.getMetadata(),
        loginStatus: true,
      };
    } else {
      return {
        user: null,
        loginStatus: false,
      };
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY as string, {
    testMode: true,
  });

  return await magic.user.logout();
});

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      checkUserIsAuthenticated.fulfilled,
      (state, action: PayloadAction<IUserState>) => {
        state.user = action.payload.user;
        state.loginStatus = action.payload.loginStatus;
      }
    );
    builder.addCase(
      logout.fulfilled,
      (state, action: PayloadAction<boolean>) => {
        state.loginStatus = !action.payload;
      }
    );
    builder.addCase(
      loginWithEmailOTP.fulfilled,
      (state, action: PayloadAction<IUserState>) => {
        state.user = action.payload.user;
        state.loginStatus = action.payload.loginStatus;
      }
    );
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
