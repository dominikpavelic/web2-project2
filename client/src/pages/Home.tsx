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
                    <h3>Ranjivost 1: Cross-site scripting (XSS)</h3>
                    <p>Tip: pohranjeni XSS</p>

                    <div className="border m-2">
                        <p>Trenutni status:</p>
                        <span>Ranjivo</span>
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
                    <h3>Loša kontrola pristupa</h3>
                    <p>Tip: pohranjeni XSS</p>

                    <div className="border m-2">
                        <p>Trenutni status:</p>
                        <span>Ranjivo</span>
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