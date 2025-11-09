import { Link, useParams } from "react-router-dom";
import { useAuth, useSecurity } from "hooks";
import { useEffect, useState } from "react";
import type { User } from "types";
import { accessControlApi } from "services";

const UserProfile = () => {
    const {userId} = useParams<{ userId: string }>();
    const {config} = useSecurity();
    const {user: currentUser} = useAuth();
    const [profileUser, setProfileUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        void loadProfile();
    }, [userId, config.accessControlEnabled]);

    const loadProfile = async () => {
        if (!userId) return;

        try {
            const response = await accessControlApi.getUserProfile(parseInt(userId));
            setProfileUser(response.user);
            setError(null);
        } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to load profile.');
            setProfileUser(null);
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
                    {!currentUser && (
                        <Link to="/login" className="btn btn-primary">
                            Prijava
                        </Link>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="card max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Korisnički profil</h2>
            <div
                className={`p-4 rounded-lg mb-6 ${
                    config.accessControlEnabled
                        ? 'bg-green-100 border border-green-400 text-green-800'
                        : 'bg-red-100 border border-red-400 text-red-800'
                }`}
            >
                <strong>Status kontrole pristupa:</strong>{' '}
                {config.accessControlEnabled
                    ? 'Korisnici mogu pristupiti samo vlastitim profilima. Aplikacija je zaštićena.'
                    : 'Korisnici mogu pristupiti profilima drugih korisnika. Aplikacija nije zaštićena.'}
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-xl p-8">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                            {profileUser?.username.charAt(0).toUpperCase()}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{profileUser?.username}</h3>
                        <span className={`mt-2 ${profileUser?.role === 'admin' ? 'admin' : 'user'}`}>
                        {profileUser?.role}
                      </span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-primary">Korisnički ID:</span>
                            <span>{profileUser?.id}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-primary">Korisničko ime:</span>
                            <span>{profileUser?.username}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-primary">Email:</span>
                            <span>{profileUser?.email}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="font-semibold text-primary">Uloga:</span>
                            <span>{profileUser?.role}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-400 rounded-lg">
                            <span className="font-semibold text-primary">Lozinka:</span>
                            <code className="bg-yellow-100 px-2 py-1 rounded">{profileUser?.password}</code>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-secondary mb-4">Promijenite ID korisnika u URL-u</h3>

                    <div className="space-y-3">
                        <Link
                            to="/user-profile/1"
                            className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition"
                        >
                            <span className="font-medium">Korisnički ID 1 (admin)</span>
                        </Link>
                        <Link
                            to="/user-profile/2"
                            className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition"
                        >
                            <span className="font-medium">Korisnički ID 2 (ivo)</span>
                        </Link>
                        <Link
                            to="/user-profile/3"
                            className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition"
                        >
                            <span className="font-medium">Korisnički ID 3 (pero)</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserProfile };