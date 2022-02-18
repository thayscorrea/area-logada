import { createContext, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

import { firebaseAuth } from "../services/firebase"

export const AuthContext = createContext({})

export function AuthProvider({ children }){
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem('@hacka:user')

    if(!userData){
      setIsAuthenticated(false)
      return null
    }

    setIsAuthenticated(true)
    return JSON.parse(userData)
  })

  async function signInWithGoogle(){
    const provider = new GoogleAuthProvider()

    const result = await signInWithPopup(firebaseAuth, provider)

    if(result.user){
      const { displayName, email, photoURL, uid } = result.user

      const user = {
        id: uid,
        name: displayName,
        email,
        avatar: photoURL,
      }

      localStorage.setItem('@hacka:user', JSON.stringify(user))

      setUser(user)
    }
  }

  async function signOutFirebase(){
    try {
      await signOut(firebaseAuth)

      localStorage.removeItem('@hacka:user')

      setUser(null)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signInWithGoogle, signOutFirebase }}>
      {children}
    </AuthContext.Provider>
  )
}
