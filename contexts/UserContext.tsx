import React, { createContext, useState, ReactNode } from "react";

interface User {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  avatar?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (updates: Partial<User>) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    fullName: "Ramesh Kamenani",
    email: "ramesh@goodseva.com",
    phone: "+91 98765 43210",
    role: "Lorry Supplier",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
