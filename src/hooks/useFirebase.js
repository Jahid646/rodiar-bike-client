

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationFirebase from "../Pages/Login/Firebase/firebase.init";


initializationFirebase();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const registerWithEmailAndPassword = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoading(false);
      }
    });

   
    return () => unSubscribe;
  }, []);

  const [admin, setAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {

    fetch(`https://salty-retreat-73850.herokuapp.com/user/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data),setIsAdminLoading(false));
  }, [user?.uid]);






  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   const user = result.user;
    //   setUser(user);
    // })
    // .catch((error) => {
    //   const errorMessage = error.message;
    //   console.log(errorMessage);
    // })
    // .finally(() => {
    //   setIsLoading(false);
    // });
  };
  return {
    user,
    setUser,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logOut,
    isLoading,
    admin,
    isAdminLoading,
    setIsLoading,
    signInUsingGoogle,
  };
};
export default useFirebase;