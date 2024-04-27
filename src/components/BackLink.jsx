import { Link } from "react-router-dom";

function BackLink({ to, name }) {
  return (
    <Link
      to={to}
      className="position-absolute top-2 left-2 text-dark"
      style={{ top: "5px", left: "30px" }}
    >
      <b>
        {`\u2190`} {name}
      </b>
    </Link>
  );
}

export default BackLink;
