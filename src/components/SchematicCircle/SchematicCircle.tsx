import React from "react";
import "./SchematicCircle.css";
import SchematicCircleProps from "../../interfaces/SchematicCircleProps";

const SchematicCircle: React.FC<SchematicCircleProps> = ({ top, left }) => {
  return (
    <div
      className="schematic-circle"
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
    />
  );
};

export default SchematicCircle;
