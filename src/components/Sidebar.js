import React from "react";
import { useSelector } from "react-redux";

const Sidebar = ()=> {
        const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
        if(!isMenuOpen) return null;

    return (<div className="shadow-lg p-2 w-44">
            <ul >
                <li className="py-1 text-lg">Home</li>
                <li className="text-lg">Shorts</li>
            </ul>

            <h1 className="font-medium  pt-4 text-lg">Subscriptions </h1>
            <ul>
                <li>Channel1</li>
                <li>Channel2</li>
                <li>Channel3</li>
            </ul>
            <h1 className="font-medium pt-4 text-lg">You</h1>
            <ul>
                <li>History</li>
                <li>Playlists</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
                <li>Downloads</li>
            </ul>
            <h1 className="font-medium pt-4 text-lg">Explore</h1>
            <ul>
                <li>Music</li>
                <li>Gaming</li>
                <li>Sport</li>
            </ul>
    </div>)
}
export default Sidebar;