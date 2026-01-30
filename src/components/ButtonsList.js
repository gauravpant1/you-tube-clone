import React from "react";
import Button from "./Button";

const buttons = [
  "All",
  "Cricket",
  "Football",
  "Chess",
  "Live",
  "Cooking",
  "News",
  "Movies",
  "Songs",
  "Coding",
  "Adventure",
  "Songs",
  "Coding",
  "Adventure"
];

const ButtonsList = () => {
  return (
    <div className="mx-20 max-w-5xl ">
      <div className="flex  overflow-x-auto scrollbar-none ">
        {buttons.map((btnName, index) => {
          return <Button key={index} name={btnName} />;
        })}
      </div>
    </div>
  );
};
export default ButtonsList;
