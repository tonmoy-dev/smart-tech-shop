import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Pages/Login/Firebase/Firebase.init";

// initialize firebase app
initializeFirebaseAuth();

const useFirebaseAuth = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);

    // register new user
    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // registration successfull.
                setAuthError('');
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // logIn User 
    const logInUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setLoading(false));
    }

    // Google Sign In
    const signInWithGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setLoading(false));
    }

    // Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);
    
    // User Log Out
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful
        })
            .catch((error) => { })
            .finally(() => setLoading(false));
    }
    return {
        user,
        registerUser,
        logInUser,
        signInWithGoogle,
        logOut,
        loading,
        authError
    }
};

export default useFirebaseAuth;