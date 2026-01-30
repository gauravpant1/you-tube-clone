import react from "react";
import ButtonsList from "./ButtonsList";

const Button = ({name}) => {
    return <div className="px-4 py-2 mx-4 my-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
        <button className="text-sm font-medium">{name}</button>
    </div>
}

export default Button;