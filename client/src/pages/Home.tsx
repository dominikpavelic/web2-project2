import * as React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {


    return (
        <div>
            <div className="text-center text-black">
                <h2 className="text-4xl font-bold">
                    Projekt 2 - Sigurnosne ranjivosti
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8 border-2">
                <div className="border-2 m-4">
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

                    <Link to="/xss-demo" className="border m-2 p-2 block text-center">
                        Idi na XSS demo
                    </Link>
                </div>












                <div className="border-2 m-4">
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