/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
export enum eAuthStatus {
  active = 'active',
  inactive = 'inactive',
  pending = '...pending',
}

export interface iUser {
  name: string;
  email: string;
}
interface iAuthContext {
  someText: string;
  status?: eAuthStatus;
  isAuthLoading: boolean;
  user?: iUser;
  loginWithEmailAndPassword: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as iAuthContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<eAuthStatus>(eAuthStatus.pending);
  const [user, setUser] = useState<iUser>();

  useEffect(() => {
    // Simulate a fetch
    setTimeout(() => {
      console.log('AuthContext: fetch 1');
      setStatus(eAuthStatus.inactive);
    }, 2000);
  }, []);

  const logout = () => {
    setStatus(eAuthStatus.inactive);
    setUser(undefined);
  };
  const loginWithEmailAndPassword = (email: string, password: string) => {
    setStatus(eAuthStatus.pending);
    // Simulate a fetch
    console.log({ email, password });
    // if (email && password)
    setTimeout(() => {
      console.log('AuthContext: fetch 2');
      setStatus(eAuthStatus.active);
      setUser({ name: 'Diego', email: 'ddalairac@gmail.com' });
    }, 2000);
  };

  return (
    <AuthContext.Provider
      value={{
        // Property
        someText: 'Hello from AuthContext',
        status: status,
        user,
        // Getter / computed property
        isAuthLoading: status === eAuthStatus.pending,
        loginWithEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
