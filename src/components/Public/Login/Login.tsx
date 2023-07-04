// ** React Imports
import { useEffect } from "react";

// Wallet Connect
import { Web3Button } from "@web3modal/react";
import { useWeb3ModalTheme } from "@web3modal/react";
import { useAccount, useSignMessage } from "wagmi";

// Polkadot Protocol
import {
  generateChallenge,
  authenticate,
  verifyToken,
} from "../../../LENS_API";

import { useUserStore } from "../../../data/store/userStore";

export default function LoginButton() {
  const { setTheme } = useWeb3ModalTheme();

  const account = useAccount({
    onConnect({ address }) {
      if (address) {
        login(address as string);
      } else {
        console.log("No address found");
      }
    },
    onDisconnect() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      useUserStore.setState({ user: null });
      console.log("Disconnected");
    },
  });

  const { signMessage } = useSignMessage({
    onSuccess: (data) => {
      authenticate(account?.address as string, data);
    },
    onError: (error) => {
      console.log("Error signing message", error);
    },
  });

  const login = async (address: string) => {
    const token = window.localStorage.getItem("accessToken");

    if (token) {
      const result = await verifyToken(token);

      if (!result) {
        console.log("Token is expired or invalid");
        const challenge = await generateChallenge(address);
        signMessage({
          message: challenge,
        });
      }
      return;
    } else {
      console.log("token is expired or invalid");
      const challenge = await generateChallenge(address);
      signMessage({
        message: challenge,
      });
    }
  };

  useEffect(() => {
    // Change the theme of the Web3Modal button
    setTheme({
      themeMode: "light",
      themeVariables: {
        "--w3m-accent-color": "#3f51b5",
      },
    });
  }, []);

  return <Web3Button />;
}
