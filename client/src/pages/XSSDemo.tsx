import { useState } from "react";

const XSSDemo = () => {

    const [commentText, setCommentText] = useState<string>();
    return (
        <div className="border-2 p-8">
            <h2 className="text-3xl font-bold">Cross-site scripting demo</h2>
            <div className="border-2 ">
                XSS ranjivost: Ranjivo
            </div>

            <div className="border-2 m-4">
                <h3 className="text-xl font-bold">Ispobajte ove XSS napade</h3>
                <div className="space-y-2">
                    <div className="flex-1 items-center gap-3 p-3 border-2 m-2">
                        <code className="flex-1 p-3">
                            {`<img src=x onError="alert('XSS Attack!')" alt="attack"/>`}
                        </code>
                        <button
                            className="border"
                            onClick={() => {
                                console.log("copy")
                            }}
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>

            <form className="border-2 p-4 m-4">
                <label htmlFor="comment" className="block text-lg">
                    Objavi komentar:
                </label>

                <textarea
                    id="comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows={4}
                    required
                    placeholder="Upišite svoj komentar ovdje..."
                    className="w-full p-4 border"
                >
                </textarea>

                <button type="submit" className="border">
                    Objavi komentar
                </button>
            </form>

            <div>
                <div className="flex justify-between items-center m-3">
                    <h3 className="text-xl font-bold">Komentari:</h3>
                    <button
                        onClick={() => console.log("komentari obrisani")}
                        className="border m-2 p-2"
                    >
                        Obriši komentare
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="border p-4 m-2">
                        <div className="flex justify-between items-center mb-2">
                            <strong>Neki korisnik</strong>
                            <span className="text-sm">{new Date().toLocaleString()}</span>
                        </div>

                        <div>
                            Neki super komentar.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { XSSDemo };