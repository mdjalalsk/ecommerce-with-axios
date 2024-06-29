import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (name, email, password) => {
    setLoading(true);

    try {
      const authResult = await createUserWithEmailAndPassword(auth, email, password);
      const user = authResult.user;

      await updateProfile(user, {
        displayName: name,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw error;
    }
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribes = onAuthStateChanged(auth, currentUser => {
      // console.log('user auth state changed ', currentUser);
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscribes();
    }
  }, [])

  const authInfo = { user, loading,createUser,signInUser,logOut }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
