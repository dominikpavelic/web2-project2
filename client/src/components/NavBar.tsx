import { Link } from "react-router-dom";

const NavBar = () => {
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

                        <Link to="/xss-demo" className=" hover:text-primary font-medium">
                            XSS Demo
                        </Link>
                    </div>
                </div>

            </div>

        </nav>
    )
}

export { NavBar };