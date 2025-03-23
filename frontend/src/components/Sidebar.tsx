import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white h-screen p-4">
            <ul>
                <li className="mb-4"><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/help" className="hover:underline">Help</Link></li>
            </ul>
        </div>
    );
};
export default Sidebar