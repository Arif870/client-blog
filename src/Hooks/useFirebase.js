import { useState, useEffect } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";

//
firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // ===================================================Google sign in
  //
  const handleGoogleSignIn = (navigate, location) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);

        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // =====================================================Register
  //
  const registerUser = (name, email, password, navigate, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        //---------
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        Swal.fire("Successfully Register!", "Thank You", "success");

        const redirect_uri = location?.state?.from || "/home";
        navigate(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // =====================================================Login
  //
  const loginUser = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(user);
        setError("");
        // ...
        Swal.fire("Successfully LogIn!", "", "success");

        const redirect_uri = location?.state?.from || "/home";
        navigate(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // =====================================================Update profile
  //

  // =====================================================SIGN OUT
  //
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});

        Swal.fire("Successfully Logout", "See you again.", "success");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //=====================
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  //=================
  return {
    user,
    error,
    isLoading,
    registerUser,
    loginUser,
    logout,
    handleGoogleSignIn,
  };
};

export default useFirebase;
