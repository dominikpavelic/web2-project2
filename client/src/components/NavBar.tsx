import { Link } from "react-router-dom";
import { useAuth } from "hooks";

const NavBar = () => {

    const {user, logout} = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <nav className="navbar">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center">
                        <span className="text-xl font-bold text-primary ml-2">Web2 ranjivosti demo</span>
                    </Link>

                    <div className="flex items-center">
                        <Link to="/" className=" hover:text-primary font-medium mx-4">
                            Home
                        </Link>

                        <Link to="/xss-demo" className=" hover:text-primary font-medium mx-4">
                            XSS Demo
                        </Link>

                        <Link to="/admin" className="hover:text-primary font-medium mx-4">
                            Admin Page
                        </Link>

                        {user ? (
                            <>
                                <Link
                                    to={`/user-profile/${user.id}`}
                                    className=" hover:text-primary font-medium mx-4"
                                >
                                    Moj profil
                                </Link>
                                <div className="flex items-center space-x-4">
                                    <div className="text-sm">
                                        <span className="text-gray-600">Prijavljen kao: </span>
                                        <span className="font-semibold text-gray-900">{user.username}</span>
                                        <span className={`ml-2 ${user.role === 'admin' ? 'admin' : 'user'}`}>
                                      {user.role}
                                    </span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>

                        ) : (
                            <Link
                                to="/login"
                                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
                            >
                                Prijava
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export { NavBar };