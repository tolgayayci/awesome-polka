import { useState, useEffect } from "react";
import { readApprovedUsers } from "../data/queries/readApprovedUsers";
import { useUserStore } from "../data/store/userStore";

export function useCheckUsers() {
  const users = useUserStore((state) => state.users);
  const [isLoading, setIsLoading] = useState(true);

  async function check() {
    try {
      if (!users) {
        await readApprovedUsers();
      }
    } catch (error) {
      console.log("useCheckUsers error", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    check();
  });

  return { isLoading, users };
}