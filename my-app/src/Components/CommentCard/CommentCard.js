export function CommentCard({ comment, postUserName }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-row pl-2 my-2">
          <img
            src="http://bit.ly/42Zm7tM"
            className="rounded-full bg-teal-400 w-10 h-10"
            alt={comment.username}
          />
        </div>
        <div className="flex p-4 flex-col">
          <div className="p-1 text-gray-900 text-md">{comment.username}</div>
          <div className="p-1 text-sm text-gray-500 leading-1">
            Replying to {postUserName}
          </div>
          <div className="p-1 leading-1">{comment?.text}</div>
          <div className="flex flex-row justify-between p-1">
            <button className="icon--button bg-white">
              <i className="fi fi-rs-heart text-teal-600"></i>
            </button>
            <button className="icon--button bg-white">
              <i className="fi fi-rs-comment text-teal-600"></i>
            </button>
            <button className="icon--button bg-white">
              <i className="fi fi-rs-share text-teal-600"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
