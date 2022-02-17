import { createContext, useState, useEffect } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { firebaseAuth } from "../services/firebase"

export const AuthContext = createContext({})

export function AuthProvider({ children }){
  const [user, setUser] = useState()

  async function signInWithGoogle(){
    const provider = new GoogleAuthProvider()

    const result = await signInWithPopup(firebaseAuth, provider)

    if(result.user){
      const { displayName, email, photoURL, uid } = result.user

      setUser({
        id: uid,
        name: displayName,
        email,
        avatar: photoURL,
      })
    }
  }

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user

        setUser({
          id: uid,
          name: displayName,
          email,
          avatar: photoURL,
        })
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}
