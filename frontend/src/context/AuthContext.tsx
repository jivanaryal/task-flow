import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axios";
import { TUser } from "../types/user.types";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthContextType {
  user: TUser | null;
  checkAuth: () => Promise<void>;
  loading: boolean;
}
const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setUser(null);
        return;
      }

      const res = await axiosInstance.get("api/auth/me");
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, checkAuth, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  // If context is null, throw an error or return a default value
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
