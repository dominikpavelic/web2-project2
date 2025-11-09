import { useSecurity } from "hooks";
import { useEffect, useState } from "react";
import type { AdminData, User } from "types";
import { accessControlApi } from "services";
import { Link } from "react-router-dom";

const Admin = () => {
    const {config} = useSecurity();
    const [data, setData] = useState<{
        accessGranted: boolean;
        adminData: AdminData[];
        users: User[];
        targetUser?: User;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        void loadAdminPage()
    }, [config.accessControlEnabled]);

    const loadAdminPage = async () => {
        try {
            const response = await accessControlApi.getAdminData();
            setData(response);
            setError(null);
        } catch (err: any) {
            setError(err.response?.data?.error || 'Učitavanje admin stranice nije uspjelo');
            setData(null);
        }
    };

    if (error) {
        return (
            <div className="card max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Zabranjen pristup</h2>
                <p className="text-gray-700 text-lg mb-6">{error}</p>
                <div className="flex gap-4 justify-center">
                    <Link to="/" className="btn btn-primary">
                        Početna stranica
                    </Link>
                </div>

            </div>
        )
    }

    return (
        <div className="card max-w-5xl mx-auto">
            <h2 className="text-primary text-3xl font-bold">Admin stranica</h2>
            <div
                className={`p-4 rounded-lg mb-6 ${
                    config.accessControlEnabled
                        ? 'bg-green-100 border border-green-400 text-green-800'
                        : 'bg-red-100 border border-red-400 text-red-800'
                }`}
            >
                <strong>Status kontrole pristupa:</strong>{' '}
                {config.accessControlEnabled
                    ? 'Korisnici se autentificiraju. Aplikacija je zaštićena.'
                    : 'Nema autentifikacije korisnika. Aplikacije je ranjiva.'}
            </div>

            {!config.accessControlEnabled && (
                <div className="bg-blue-100 border border-blue-400 text-blue-800 p-4 rounded-lg mb-6">
                    <strong>Napomena:</strong> Kontrola pristupa je onemogućena. Svi korisnici imaju pristup admin stranici.
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Osjetljivi admin podaci:</h3>
                <div className="grid gap-4">
                    {data?.adminData.map((item: AdminData) => (
                        <div key={item.id} className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg">
                            <h4 className="text-lg font-bold text-yellow-900 mb-2">{item.title}</h4>
                            <p className="text-yellow-800">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Baza korisnika</h3>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-primary text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">ID</th>
                            <th className="px-6 py-3 text-left">Korisničko ime</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Šifra</th>
                            <th className="px-6 py-3 text-left">Uloga</th>

                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {data?.users.map((user: User) => (
                            <tr key={user.id} className="border-b">
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4 font-semibold">{user.username}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.password}</td>
                                <td className="px-6 py-4">{user.role}</td>
                            </tr>

                        ))}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )

}

export { Admin };