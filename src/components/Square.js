import React from "react";

const Square = ({ value, onClick, index }) => {
  const style = value ? `squares ${value}` : `squares`;
  const idSelector = `square-${index}`;

  return (
    <button className={style} id={idSelector} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
