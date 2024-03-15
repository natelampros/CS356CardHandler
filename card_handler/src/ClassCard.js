import React from "react";
import "./Card.css";

const Card = ({ className, description, prerequisite, code }) => {
  return (
    <div className="card-container">
      <div className="card-title">{className}</div>
      <div className="card-code">{code}</div>
      <div className="card-description">{description}</div>
      <div className="card-footer">
        {prerequisite && (
          <>
            <span className="prerequisite-label">Prerequisite:</span>
            <span className="card-prerequisite">{prerequisite}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
