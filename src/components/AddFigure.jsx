import { Link } from "react-router-dom";

function AddFigure({ to }) {
  return (
    <figure
      className="d-flex align-items-center justify-content-center"
      style={{ height: "230px", width: "190px" }}
    >
      <Link
        to={to}
        type="button"
        className="btn btn-success rounded-circle p-0 text-white"
        style={{
          height: "50px",
          width: "50px",
          fontSize: "36px",
          lineHeight: "48px",
        }}
      >
        +
      </Link>
    </figure>
  );
}

export default AddFigure;
