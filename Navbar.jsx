import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="bg-blue-600 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-white text-2xl font-bold">My Website</h1>
                <ul className="flex space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Services"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Hook"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                          Hook
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Api"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                          Api
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Forms"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                          Forms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/UserTable"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                          UserTable
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Todo"
                            className={({ isActive }) =>
                                isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                            }
                        >
                          Todo
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
