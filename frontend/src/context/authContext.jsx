import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";



export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5050/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) setUser(data);
            return true
        } catch (error) {
            console.error("Login failed", error);
            return false
        }
    };

    const signup = async (name, email, password) => {
        try {
            const response = await fetch("http://localhost:5050/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            if (response.ok) {
                alert("Signup successful, please login.");
                return true
            }
        } catch (error) {
            console.error("Signup failed", error);
            return false
        }
    };

    const logout = () => setUser(null);

    const checkCookie = async () => {
        try {
            const response = await fetch("http://localhost:5050/api/users/me", {
                method: "GET",
                credentials: "include",
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data);
            }
        } catch (error) {
            console.error("Cookie check failed", error);
        }
    };

    useEffect(() => {
        checkCookie();
    }, [])
    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => useContext(AuthContext)