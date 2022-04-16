import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Pages/Login/Firebase/Firebase.init";

// initialize firebase app
initializeFirebaseAuth();

const useFirebaseAuth = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    // register new user
    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // registration successfull.
                setAuthError('');

                // change displayName
                const newUser = { email, displayName: name };
                setUser(newUser);

                // save user to db 
                saveUserToDB(email, name, 'POST');

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                });
                history.replace('/');
                // ...
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
    const signInWithGoogle = (location, history) => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // save to db
                saveUserToDB(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
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
                // user is signed out
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    useEffect(() => {
        fetch(`https://smart-tech-shop-server.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    },[user.email])
    
    // User Log Out
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful
        })
            .catch((error) => { })
            .finally(() => setLoading(false));
    }

    // send user data to database
    const saveUserToDB = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`https://smart-tech-shop-server.herokuapp.com/users`, {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)  
        })
        .then()
    }
    return {
        user,
        admin,
        registerUser,
        logInUser,
        signInWithGoogle,
        logOut,
        loading,
        authError
    }
};

export default useFirebaseAuth;