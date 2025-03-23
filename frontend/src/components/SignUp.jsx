import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const SignUp = () => {
    const navigate = useNavigate()
    const { signup } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert('Invalid Details')
            return
        }
        let res = await signup(name, email, password)
        if (res) navigate('/signIn')
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-2 border rounded" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-2 border rounded" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-2 border rounded" />
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type='submit'>Sign Up</button>
                </form>
                <p className="text-center mt-4">Already have an account? <button onClick={() => navigate("/signIn")} className="text-blue-500">Login</button></p>
            </div>
        </div>
    );
}

export default SignUp