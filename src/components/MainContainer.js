import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonsList from "./ButtonsList";

const MainContainer = ()=>{
    return (<div className="w-full">
        <ButtonsList/>
        <VideoContainer/>
    </div>)
}
export default MainContainer;
