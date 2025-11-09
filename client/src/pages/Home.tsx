import * as React from "react";
import { Link } from "react-router-dom";
import { Toggle } from "components";
import { useSecurity } from "hooks";

const Home: React.FC = () => {

    const {config, toggleXSSProtection, toggleAccessControl} = useSecurity();

    return (
        <div className="space-y-8">
            <div className="text-center text-white mt-4">
                <h2 className="text-4xl font-bold">
                    Projekt 2 - Sigurnosne ranjivosti
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="card">
                    <h3 className="text-2xl font-bold text-primary">Ranjivost 1: Cross-site scripting (XSS)</h3>
                    <div className="bg-gray-100 rounded-md flex items-center gap-2 p-2">
                        <p className="font-semibold">Trenutni status:</p>
                        <span className={`font-bold rounded-md  px-4 py-2  ${
                            config.xssProtection
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}>
                            {config.xssProtection ? "Zaštićeno" : "Ranjivo"}
                        </span>
                    </div>

                    <div>
                        <Toggle
                            checked={config.xssProtection}
                            onChange={toggleXSSProtection}
                            label={"Uključi XSS zaštitu"}
                        />
                    </div>

                    <Link to="/xss-demo" className="btn btn-primary w-full text-center block">
                        Idi na XSS demo
                    </Link>
                </div>

                <div className="card">
                    <h3 className="text-2xl font-bold text-primary">Ranjivost 2: Loša kontrola pristupa</h3>
                    <div className="bg-gray-100 rounded-md flex items-center gap-2 p-2">
                        <p className="font-semibold">Trenutni status:</p>
                        <span className={`font-bold rounded-md  px-4 py-2  ${
                            config.accessControlEnabled
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}>
                            {config.accessControlEnabled ? "Zaštićeno" : "Ranjivo"}
                        </span>
                    </div>

                    <div>
                        <Toggle
                            checked={config.accessControlEnabled}
                            onChange={toggleAccessControl}
                            label={"Uključi kontrolu pristupa"}
                        />
                    </div>

                    <Link to="/admin" className="btn btn-primary w-full text-center block">
                        Idi na admin stranicu
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Home };