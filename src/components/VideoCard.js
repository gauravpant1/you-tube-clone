const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="w-full h-72 shadow-md rounded-xl ">
     
      <img
        className="  rounded-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="p-2 flex-1 flex flex-col ">
        <h3 className="pt-1 font-bold text-sm">{title}</h3>
        <p className="pt-1 font-semibold">{channelTitle}</p>
        <p className="pt-1 font-bold text-xs">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
