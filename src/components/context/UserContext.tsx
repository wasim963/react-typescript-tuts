import React, { useState, createContext } from "react"

// Auth User Type
type AuthUser = {
    name: string,
    email: string
}

// Context Type 
type ContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// context
export const UserContext = createContext<ContextType | null>(null);

// User Contex Provier Props Type
type UserContextProviderProps = {
    children: React.ReactNode
}

// User Context Provider
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }} >
            {children}
        </UserContext.Provider>
    )
}