import React from 'react'
import Header from './Header';
import { useAuth } from '../context/authContext';
import Sidebar from './Sidebar';

const Help = () => {
    const { logout } = useAuth();
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header logout={logout} />
                <div className="flex flex-col items-center justify-center p-4 w-full">
                    <h2 className="text-3xl font-bold">Help Page</h2>
                    <p className="mt-4">This is the help section. Here you can find support and documentation.</p>
                </div>
            </div>
        </div>
    );
};

export default Help