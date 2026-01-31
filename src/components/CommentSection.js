import { Link } from "react-router-dom";

const CommentSection = ({ comments }) => {
  
  return (
    <div className="max-w-[850px]">
      <div className="font-semibold px-2 text-xl pb-5">
        <h1>{comments.length} Comments</h1>
      </div>

      <div>
        {comments.map((item) => {
          const comment = item?.snippet?.topLevelComment?.snippet;
          if (!comment) return null;

          return (
            <div key={item.id} className="flex gap-3 mb-5 px-2">
              <img
                src={comment.authorProfileImageUrl}
                alt="user"
                className="rounded-full h-10"
              ></img>
              <div>
                <Link to={comment.authorChannelUrl}>

                  <h3 className="font-semibold">{comment.authorDisplayName}</h3>
                </Link>
                <p className="text-sm">{comment.textDisplay}</p>
                <p>👍{comment.likeCount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentSection;
