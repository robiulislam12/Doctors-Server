import {getAuth, signInWithPopup , GoogleAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth'

import "../firebase";
import { useEffect, useState } from 'react'

//Firebase Enable
// initializeAuthentication()


//Use Fire base hooks
export default function useFirebase() {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');


    //Enable firebase Auth
    const auth = getAuth()

    //Google Sign in
    const signInWithGoogle = () =>{

        const googleProvider = new GoogleAuthProvider();

       return  signInWithPopup(auth, googleProvider)
        

    }
 
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
        })
        return unSubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const logOut = () =>{
        signOut(auth).then(result =>{
            setUser({})
        })
    }
    return {
        user, error, signInWithGoogle, logOut, setError
    }
}
