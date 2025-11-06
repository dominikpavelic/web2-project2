import { useState } from "react";

const XSSDemo = () => {

    const [commentText, setCommentText] = useState<string>();
    return (
        <div className="card max-w-5xl mx-auto">
            <h2 className="text-primary text-3xl font-bold">Cross-site scripting demo</h2>
            <div className="p-4 rounded-lg mb-6 bg-red-100 border border-red-400 text-red-800">
                XSS ranjivost: Ranjivo
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-secondary">Isprobajte ove XSS napade</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <code className="flex-1 p-3 text-sm text-red-500 bg-gray-100 rounded overflow-x-auto">
                            {`<img src=x onError="alert('XSS Attack!')" alt="attack"/>`}
                        </code>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                console.log("copy")
                            }}
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>

            <form className="m-8">
                <label htmlFor="comment" className="block text-lg font-semibold text-gray-700 mb-3">
                    Objavi komentar:
                </label>

                <textarea
                    id="comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows={4}
                    required
                    placeholder="Upišite svoj komentar ovdje..."
                    className="input resize-y"
                >
                </textarea>

                <button type="submit" className="btn btn-primary mt-4">
                    Objavi komentar
                </button>
            </form>

            <div>
                <div className="flex justify-between items-center m-6">
                    <h3 className="text-2xl font-bold text-primary">Komentari:</h3>
                    <button
                        onClick={() => console.log("komentari obrisani")}
                        className="btn btn-danger"
                    >
                        Obriši komentare
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                            <strong className="text-primary">Neki korisnik</strong>
                            <span className="text-sm text-gray-500">{new Date().toLocaleString()}</span>
                        </div>

                        <div className="text-gray-800">
                            Neki super komentar.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { XSSDemo };