import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config'
import useAxiosFetch from '../../Hooks/useAxiosFetch/useAxiosFetch';

// creating auth for firebase authetication
const auth = getAuth(app)

// Context created and exported
export const AuthContext = createContext('');

// Get google provider from firebase
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    // Hooks
    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(true);
    const axiosFetch = useAxiosFetch();


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
            .catch(error => {
                console.log(error)
            })
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

            // get the use email
            const email = user?.email || currentUser?.email;
            const useremail = { email: email };
            setCurrentUser(user);
            setLoading(false);

            // sending user email to backend
            if (user) {
                axiosFetch.post('/tokencreate', useremail)
                    .then(() => {
                        //
                    });
            }
            else {
                axiosFetch.post('/signoutuser', useremail)
                    .then(res => {
                        console.log(res.data)
                    });
            }

        })
        return () => unSubscribe();
    }, [currentUser?.email, axiosFetch])


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