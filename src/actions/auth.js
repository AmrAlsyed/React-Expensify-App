import { googleAuthProvider, auth } from "../firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})


export const startLogin = () => {
    return async (dispatch) => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            // Additional dispatch actions if needed
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };
};

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return async () => {
         await signOut(auth);
    }
}