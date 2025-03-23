import React from 'react'
const Header = ({ logout }) => {
    return (
        <div className="flex justify-between items-center bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold">MERN</h1>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </div>
    );
};
export default Header