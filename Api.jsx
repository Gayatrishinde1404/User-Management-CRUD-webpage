import { useState } from "react";
import Axios from "axios";

const Api = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-gray-100">
                <button className="p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 mt-5" onClick={getUsers}>
                    Get Data
                </button>

                <div className="bg-white shadow-lg rounded-lg mt-6 w-11/12 md:w-3/4 lg:w-2/3 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Username</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Email</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Address</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.length > 0 ? (
                                users.map((user, i) => (
                                    <tr key={i} className="hover:bg-gray-100">
                                        <td className="px-6 py-4 text-gray-900">{user.name}</td>
                                        <td className="px-6 py-4 text-gray-700">{user.username}</td>
                                        <td className="px-6 py-4 text-gray-700">{user.email}</td>
                                        <td className="px-6 py-4 text-gray-700">
                                            {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="p-5 text-center text-gray-500">
                                        <div className="flex justify-center items-center space-x-2">
                                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"></div>
                                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
                                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce animation-delay-400"></div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Api;
