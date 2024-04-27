import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-top border-bottom border-dark">
      <button
        className="navbar-toggler m-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              My gift lists
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="blog.html">
              Blog
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="contact-us.html">
              Contact us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Edit profile
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
