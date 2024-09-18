import React from "react";
import "./Content.css";
import ContentProps from "../../interfaces/ContentProps";
import { useNavigate } from "react-router-dom";

const Content: React.FC<ContentProps> = ({ children, isCloseBtnDisabled }) => {
  const navigate = useNavigate();

  const handleClickBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="content">
      <h3>Этот блок нужно реализовать</h3>
      <div className="btn-box_links">
        {!isCloseBtnDisabled && <div className="btn-back" onClick={handleClickBackBtn}>
          Назад
        </div>}
      </div>
      <div className="container">{children}</div>
    </div>
  );
};

export default Content;
