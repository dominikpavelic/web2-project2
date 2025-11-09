import type { CommentType } from "types";
import { useSecurity } from "hooks";

const Comment = ({comment}: { comment: CommentType }) => {
    const {config} = useSecurity();

    return (
        <div key={comment.id} className="bg-gray-100 border border-gray-300 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
                <strong className="text-primary">{comment.username}</strong>
                <span className="text-sm text-gray-500">{new Date(comment.timestamp).toLocaleString()}</span>
            </div>

            <div className="text-gray-800">
                {config.xssProtection ? (
                    <div>{comment.text}</div>
                ) : (
                    <div dangerouslySetInnerHTML={{__html: comment.text}}/>
                )}
            </div>
        </div>
    )
}

export { Comment };