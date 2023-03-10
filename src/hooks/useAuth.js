import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  const signin = (user) => {
    setUser(user);
  }
  const signout = () => {
    setUser(null);
  }

  return <AuthContext.Provider value={{user, signin, signout}}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () =>{
  return useContext(AuthContext)
}