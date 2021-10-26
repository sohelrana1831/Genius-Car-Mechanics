import { GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Pages/Login/Firebase/Firebase.config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [lodaing, setLoading] = useState(true);
  // Google sign in
  const googleSignIn = () => {
    try {
      auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Cuttent login user
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  // Logout
  const logout = () => auth.signOut();

  const value = {
    googleSignIn,
    user,
    logout,
    lodaing,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
