import React from "react";
import "./Circle.css";
import CircleProps from "../../interfaces/CircleProps";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom"; 
import getRandomInt from "../../functions/getRandomInt";

const Circle: React.FC<CircleProps> = ({ color }) => {
  const randomId = uuidv4();
  const top = getRandomInt(3, 97);
  const left = getRandomInt(3, 97);
  const navigate = useNavigate(); 

  const circleClass = classNames("circle", {
    "circle-1": color === 1,
    "circle-2": color === 2,
    "circle-3": color === 3,
  });

  const handleLinkClick = () => {
    navigate(`/circle/${randomId}`, { state: { top, left, color } });
  };

  return (
    <a
      onClick={handleLinkClick}
      className={circleClass}
      data-id={randomId}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    ></a>
  );
};

export default Circle;
