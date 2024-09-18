import React, { useState, useEffect } from "react";
import "./CirclePage.css";
import { useParams, useLocation } from "react-router-dom";
import Content from "../../components/Content/Content";
import SchematicCircle from "../../components/SchematicCircle/SchematicCircle";

const CirclePage: React.FC = () => {
  const [topPixels, setTopPixels] = useState(0);
  const [leftPixels, setleftPixels] = useState(0);

  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const state = location.state as { top: number; left: number; color: number };

  const top = state?.top || 0;
  const left = state?.left || 0;
  const color = state?.color || 0;

  useEffect(() => {
    const contentContainer = document.querySelector(".container");
    if (contentContainer) {
      const { width, height } = contentContainer.getBoundingClientRect();
      const border = 6;
      const topPixels = contentContainer ? (top / 100) * height - border : 0;
      const leftPixels = contentContainer ? (left / 100) * width - border : 0;
      setTopPixels(Number(topPixels.toFixed(0)));
      setleftPixels(Number(leftPixels.toFixed(0)));
    }
  }, []);

  return (
    <Content isCloseBtnDisabled={false}>
      <SchematicCircle top={topPixels} left={leftPixels} />
      <div className="info-circle">
        <p>ID элемента: {id}</p>
        <p>Отступ сверху: {topPixels} px</p>
        <p>Отступ слева: {leftPixels} px</p>
        <p>Группа: {color}</p>
      </div>
    </Content>
  );
};

export default CirclePage;
