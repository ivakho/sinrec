import React, { useEffect, useState } from "react";
import Circle from "../Circle/Circle";
import CircleGroupProps from "../../interfaces/CircleGroupProps";

const CircleGroup: React.FC<CircleGroupProps> = ({
  count,
  color,
  appearTime,
  dissapearTime,
}) => {
  const [isCircleVisible, setIsCircleVisible] = useState(false);
  const [isFirstRender, setisFirstRender] = useState(true);

  useEffect(() => {
    let disappearTimer: number | undefined;

    if (isCircleVisible) {
      disappearTimer = setTimeout(() => {
        setIsCircleVisible(false);
      }, dissapearTime);
    }

    let firstAppearTimer: number | undefined;

    if (isFirstRender && !isCircleVisible) {
      firstAppearTimer = setTimeout(() => {
        setIsCircleVisible(true);
        setisFirstRender(false);
      }, appearTime);
    }

    let appearTimer: number | undefined;

    if (!isFirstRender && !isCircleVisible) {
      appearTimer = setTimeout(() => {
        setIsCircleVisible(true);
      }, 0);
    }

    return () => {
      clearTimeout(disappearTimer);
      clearTimeout(firstAppearTimer);
      clearTimeout(appearTimer);
    };
  }, [isCircleVisible]);

  return (
    <>
      {isCircleVisible &&
        Array.from({ length: count }).map((_, index) => (
          <Circle key={index} color={color} />
        ))}
    </>
  );
};

export default CircleGroup;
