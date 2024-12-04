import { createContext, ReactNode, useContext } from "react";
import { checkMe } from "../../api/user";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../model/User";

const UserContext = createContext<{
  user: User | null;
  isLoading: boolean;
  isError: boolean;
} | null>(null);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["checkMe"],
    queryFn: () => checkMe(),
    refetchInterval: 5000,
  });

  if (!user) return null;

  return (
    <UserContext.Provider value={{ user, isLoading, isError }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
