import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import "../firebase";


//Firebase Enable
// initializeAuthentication()


//Use Fire base hooks
export default function useFirebase() {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    //Enable firebase Auth
    const auth = getAuth()

    //Google Sign in
    const signInWithGoogle = () =>{

        const googleProvider = new GoogleAuthProvider();

       return  signInWithPopup(auth, googleProvider)
        

    }
 
    //Email and password register
    const registerUser = async (email, password, username) =>{
        setIsLoading(true)
       const newUser = await createUserWithEmailAndPassword(auth, email, password)
        
          //update Profile
          await updateProfile(auth.currentUser, {
              displayName: username
          })

          //update user state
          const user = auth.currentUser;
          setUser({
              ...user,
          })
          
          return newUser
    }

    //sign in with email and password
    const logIn = (email, password) =>{
        setIsLoading(true)
       return signInWithEmailAndPassword(auth, email, password)

    }
    //observe user state
    useEffect(()=>{

        const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const logOut = () =>{

        setIsLoading(true)
        
        signOut(auth).then(result =>{
            setUser({})
        })
        .finally(()=>{
            setIsLoading(false)
          })
    }

    //all things return here
    return {
        user,
        error,
        signInWithGoogle,
        logOut, 
        setError, 
        registerUser, 
        logIn,
        isLoading
    }
}
