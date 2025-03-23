import React from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        let res = await login(email, password);
        if (res) {
            console.log(res)
            return navigate("/")
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <input name="email" type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" required />
                    <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" required />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
                </form>
                <p className="text-center mt-4">Don't have an account? <button onClick={() => navigate("/signup")} className="text-blue-500">Sign Up</button></p>
            </div>
        </div>
    );
}

export default SignIn