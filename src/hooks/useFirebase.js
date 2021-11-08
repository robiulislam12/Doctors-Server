import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import "../firebase";



//Firebase Enable
// initializeAuthentication()


//Use Fire base hooks
export default function useFirebase() {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [authToken, setAuthToken] = useState('')



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

          //save user Call here
          saveUser(email, username, 'POST')
          
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
                getIdToken(user)
                .then(idToken =>{
                    setAuthToken(idToken)
                })

            } else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Admin check
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])


    //logout the current user
    const logOut = () =>{

        setIsLoading(true)
        
        signOut(auth).then(result =>{
            setUser({})
        })
        .finally(()=>{
            setIsLoading(false)
          })
    }

    //Save user in database 
    const saveUser = (email , displayName, method) =>{
        const user = {email, displayName};

        //Post the user
       fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
       })
       .then()
    }


    //all things return here
    return {
        user,
        admin,
        error,
        authToken,
        signInWithGoogle,
        logOut, 
        setError, 
        registerUser, 
        logIn,
        isLoading,
        setIsLoading,
        saveUser
    }
}
