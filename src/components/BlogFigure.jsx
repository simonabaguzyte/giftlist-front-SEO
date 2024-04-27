import React from "react";
// import { useHistory } from "react-router-dom";

function BlogFigure({ title, author, date, id }) {
  // const history = useHistory();

  const handleClick = () => {
    // history.push(`/blog/${id}`);
  };

  return (
    <figure
      className="d-flex flex-column align-items-center text-center p-3 rounded"
      style={{
        backgroundColor: "rgb(235, 232, 232)",
        height: "230px",
        width: "190px",
      }}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <h4>Author: {author}</h4>
      <h4>Date: {date}</h4>
    </figure>
  );
}

export default BlogFigure;
