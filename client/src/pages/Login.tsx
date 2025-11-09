import { type FormEvent, useState } from "react";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError('');

        try {
            const credentials = {
                username: username,
                password: password
            }
            await login(credentials);
            navigate("/");
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="card max-w-md w-full">
                <h2 className="text-3xl font-bold text-primary text-center mb-8">Login</h2>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-800 p-4 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-semibold mb-2">
                            Korisničko ime:
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="input"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold mb-2">
                            Lozinka:
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Prijavi se
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-secondary mb-3">Testni korisnici:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong>Admin:</strong> admin / admin123</li>
                        <li><strong>Pero:</strong> pero / pero123</li>
                        <li><strong>Ivo:</strong> ivo / ivo123</li>
                    </ul>
                </div>
            </div>

        </div>
    )

}

export { Login };