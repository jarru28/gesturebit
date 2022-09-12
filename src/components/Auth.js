import React, { useEffect, useState } from "react";
import{app,db} from "../firebase.js";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [User, setUser] = useState([]);
  
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    if(user){
        db.collection('user').where('email','==',user.email).onSnapshot((query) => {
          const list = [];
          query.forEach(document => {
              list.push({...document.data(), Id:document.id})
          })
          setUser(list[0])
      })
    }
    });
    setPending(false)
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        User
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};