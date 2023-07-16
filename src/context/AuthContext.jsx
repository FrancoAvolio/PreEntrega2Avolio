import { createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
  });
  const login = (values) => {
    setUser({
      logged: true,
      email: values.email,
    });
  };
  return(
        <AuthContextProvider value={login}>
             {children}
        </AuthContextProvider>
  )
};
