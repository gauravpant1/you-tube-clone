import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {

    const [searchParams] =useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div >
      <iframe className="px-4 py-5 w-[1000px] h-[500px]"
        width="815"
        height="458"
        src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
       
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WatchPage;
