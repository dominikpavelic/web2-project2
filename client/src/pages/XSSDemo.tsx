import { useEffect, useState } from "react";
import type { CommentType } from "types";
import { xssApi } from "services";
import { useSecurity } from "hooks";
import { Comment, Toggle } from "components";
import * as React from "react";

const XSS_EXAMPLES = [
    `<img src=x onError="alert('XSS Attack!')" alt="attack"/>`,
    `<img src=x onError="alert(document.cookie)" alt="attack"/>`,
    `<iframe src="javascript:alert('XSS from iframe')"></iframe>`,
    `<video src=x onError=alert("XSS from video")></video>`,
    `<audio src=x onError=alert("XSS from audio")></audio>`,
];
const XSSDemo = () => {
    const {config, toggleXSSProtection} = useSecurity();
    const [comments, setComments] = useState<CommentType[]>([]);
    const [commentText, setCommentText] = useState<string>();


    useEffect(() => {
        void loadComments();
    }, []);

    const loadComments = async () => {
        const response = await xssApi.getComments();
        setComments(response.comments);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText || !commentText.trim()) {
            return;
        }

        try {
            await xssApi.addComment(commentText);
            setCommentText('');
            await loadComments();
        } catch (error) {
            console.error("Failed to add comment:", error);
        }

    }

    const handleClearComments = async () => {
        await xssApi.clearComments();
        await loadComments();
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Kopirano")
        });
    }

    return (
        <div className="card max-w-5xl mx-auto">
            <h2 className="text-primary text-3xl font-bold">Cross-site scripting demo</h2>
            <div className="mb-8">
                <div className="card shadow-md">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                XSS ranjivost
                            </h3>
                        </div>
                        <Toggle
                            checked={config.xssProtection}
                            onChange={toggleXSSProtection}
                            label=""
                        />
                    </div>

                    <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                        config.xssProtection
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                    >
                        <div className="flex items-center gap-2">
                            <span>Status: {config.xssProtection ? 'Zaštićeno' : 'Ranjivo'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-secondary">Isprobajte ove XSS napade</h3>
                <div className="space-y-2">
                    {XSS_EXAMPLES.map((example, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                            <code className="flex-1 p-3 text-sm text-red-500 bg-gray-100 rounded overflow-x-auto">
                                {example}
                            </code>
                            <button
                                className="btn btn-primary"
                                onClick={() => copyToClipboard(example)}
                            >
                                Kopriraj
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <form className="m-8" onSubmit={handleSubmit}>
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
                    Objavi
                </button>
            </form>

            <div>
                <div className="flex justify-between items-center m-6">
                    <h3 className="text-2xl font-bold text-primary">Komentari:</h3>
                    <button
                        onClick={handleClearComments}
                        className="btn btn-danger"
                    >
                        Obriši sve komentare
                    </button>
                </div>

                {comments.length === 0 ? (
                    <p className="text-center text-gray-500">Trenutno nema objavljenih komentara.</p>
                ) : (
                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <Comment comment={comment}/>
                        ))}
                    </div>

                )}

            </div>
        </div>
    )
}

export { XSSDemo };