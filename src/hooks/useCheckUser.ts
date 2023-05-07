import { useState, useEffect } from "react";
import { readUserAttribute } from "../data/queries/readUserAttribute";
import { useUserStore } from "../data/store/userStore";

import { useAccount } from "wagmi";

export function useCheckUser() {
  const user = useUserStore((state) => state.user);
  const  account  = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  async function check() {
    try {
      if (!user) {
        await readUserAttribute(account?.address as string);
      }
    } catch (error) {
      console.log("useCheckUser error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    check();
  });

  return { isLoading, user };
}