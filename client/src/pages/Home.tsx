import * as React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {


    return (
        <div className="space-y-8">
            <div className="text-center text-white mt-4">
                <h2 className="text-4xl font-bold">
                    Projekt 2 - Sigurnosne ranjivosti
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="card">
                    <h3 className="text-2xl font-bold text-primary">Ranjivost 1: Cross-site scripting (XSS)</h3>
                    <div className="bg-gray-100 rounded-md flex items-center gap-2 p-2">
                        <p className="font-semibold">Trenutni status:</p>
                        <span className="font-bold rounded-md bg-red-100 text-red-800 px-4 py-2 ">Ranjivo</span>
                    </div>

                    <div>
                        <button className="border m-2 p-2" onClick={() => console.log("toggle")}>
                            Toggle
                        </button>
                    </div>

                    <Link to="/xss-demo" className="btn btn-primary w-full text-center block">
                        Idi na XSS demo
                    </Link>
                </div>

                <div className="card">
                    <h3 className="text-2xl font-bold text-primary">Ranjivost 2: Loša kontrola pristupa</h3>
                    <div className="bg-gray-100 rounded-md flex items-center gap-2 p-2">
                        <p className="font-semibold">Trenutni status:</p>
                        <span className="font-bold rounded-md bg-red-100 text-red-800 px-4 py-2 ">Ranjivo</span>
                    </div>

                    <div>
                        <button className="border m-2 p-2" onClick={() => console.log("toggle")}>
                            Toggle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home };