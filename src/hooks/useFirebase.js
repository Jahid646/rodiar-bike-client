

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import initializationFirebase from "../Pages/Login/Firebase/firebase.init";


initializationFirebase();
const auth = getAuth();
const database = getDatabase();
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
  const writeDatabase = (name, email, uid) => {
    set(ref(database, "users/" + uid), {
      email: email,
      name: name,
    });
  };
  const readDatabase = (user, uid) => {
    const userdata = ref(database, "users/" + uid);
    onValue(userdata, (snapshot) => {
      const data = snapshot.val();
      user.displayName = data.name;
      setUser(user);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName) {
          setUser(user);
          setIsLoading(false);
        } else {
          readDatabase(user, user.uid);
        }
      } else {
        setUser({});
        setIsLoading(false);
      }
    });
    return () => unSubscribe;
  }, []);
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
    writeDatabase,
    readDatabase,
    isLoading,
    setIsLoading,
    signInUsingGoogle,
  };
};
export default useFirebase;