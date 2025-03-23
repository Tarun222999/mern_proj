import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext';
import Sidebar from './Sidebar';
import Header from './Header';

const Home = () => {
    const { logout } = useAuth();
    const [items, setItems] = useState([])
    const listItems = async () => {
        try {
            const response = await fetch("http://localhost:5050/api/users/data", {
                method: "GET",
                credentials: "include",
            });
            if (response.ok) {
                const data = await response.json();

                setItems(data.data);
            }
        } catch (error) {
            console.error("Authentication check failed", error);
        }
    };
    useEffect(() => {

        listItems();
    }, []);
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full">
                <Header logout={logout} />
                <div className="flex flex-col items-center justify-center p-4 w-full">
                    <h2 className="text-3xl font-bold mb-4">Home </h2>
                    <table className="table-auto border-collapse border border-gray-500 w-full max-w-3xl">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="border border-gray-500 px-4 py-2">ID</th>
                                <th className="border border-gray-500 px-4 py-2">Name</th>
                                <th className="border border-gray-500 px-4 py-2">Description</th>
                                <th className="border border-gray-500 px-4 py-2">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className="text-center bg-white">
                                    <td className="border border-gray-500 px-4 py-2">{item.id}</td>
                                    <td className="border border-gray-500 px-4 py-2">{item.name}</td>
                                    <td className="border border-gray-500 px-4 py-2">{item.description}</td>
                                    <td className="border border-gray-500 px-4 py-2">{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

};

export default Home