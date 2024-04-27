import { Link } from "react-router-dom";
import Footer from "src/components/Footer";
import PageWrapper from "src/components/PageWrapper";

function Header() {
  return (
    <h1 style={{ fontSize: "180px" }}>
      <b>GIFT</b>LIST
    </h1>
  );
}
function Subheader() {
  return (
    <h4 style={{ fontSize: "28px" }}>
      Create and organize your personal gift list
    </h4>
  );
}
function LinkButton({ name, to }) {
  return (
    <Link
      to={to}
      className="btn btn-light mr-4"
      style={{ fontSize: "20px", minWidth: "80px" }}
    >
      {name}
    </Link>
  );
}

function Root() {
  return (
    <PageWrapper>
      <div className="text-center mt-5">
        <Header />
        <Subheader />

        <div className="my-4">
          <LinkButton name="Log In" to="/login" />
          <LinkButton name="Register" to="/register" />
        </div>
      </div>

      <Footer />
    </PageWrapper>
  );
}

export default Root;
