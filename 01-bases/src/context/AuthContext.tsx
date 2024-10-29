/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
enum eAuthStatus {
  active = 'active',
  inactive = 'inactive',
  pending = '...pending',
}

interface iAuthContext {
  someText: string;
  status?: eAuthStatus;
}

export const AuthContext = createContext({} as iAuthContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<eAuthStatus>(eAuthStatus.pending);
  useEffect(() => {
    // Simulate a fetch
    setTimeout(() => {
      console.log('AuthContext: fetch completed');
      setStatus(eAuthStatus.active);
    }, 2000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        someText: 'Hello from AuthContext',
        status: status,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
