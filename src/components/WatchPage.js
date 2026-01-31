import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import { MY_API } from "../utils/constants";

const WatchPage = () => {
  const [comments, setComments] = useState([]);

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${searchParams.get("v")}&key=${MY_API}`,
    );
    const json = await data.json();
    setComments(json.items);
    
  };

  return (
    <div>
      <iframe
        className="px-4 py-5 w-[850px] h-[500px]"
        width="815"
        height="458"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div>
        <CommentSection comments={comments} />
      </div>

      <div></div>
    </div>
  );
};
export default WatchPage;
