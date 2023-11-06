import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config'

// creating auth for firebase authetication
const auth = getAuth(app)

// Context created and exported
export const AuthContext = createContext('');

// Get google provider from firebase
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(true);


    // Create new user by email-password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update email-pasword user info
    const updateUserInfo = (currentUser, username, photo) => {
        updateProfile(currentUser, {
            displayName: username,
            photoURL: photo,
        })
            .then(() => {
                // profile updated
            })
            .catch(error => console.log(error))
    };

    // Log in using email-password
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login using Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Logouot user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };




    // Currently signed in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])


    // Send the info to the children
    const authInfo = { createNewUser, logInUser, currentUser, loading, logOutUser, googleSignIn, updateUserInfo };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



AuthProvider.propTypes = {
    children: PropTypes.node,
}