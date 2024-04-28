import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageWrapper from "src/components/PageWrapper";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import SideAds from "src/components/SidePoster";
import BackLink from "src/components/BackLink";
import ContentTitle from "src/components/ContentTitle";

function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch("http://localhost:8000/token", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // });

    // const responseData = await response.json();
    // localStorage.setItem("accessToken", responseData.access_token);
    navigate("/giftlist-front-SEO/my-lists");
  };

  return (
    <form
      className="form mt-4"
      onSubmit={handleSubmit}
      style={{ minWidth: "400px", maxWidth: "500px" }}
    >
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-light mr-4">
          Log In
        </button>
      </div>
    </form>
  );
}

function ForgotYourPasswordLink() {
  return <h6 className="text-center mt-4">Forgot your password?</h6>;
}
function RegisterLink() {
  return (
    <h6 className="text-center mt-2">
      Do not have an account? <Link to="/register">Register</Link>
    </h6>
  );
}

function Login() {
  return (
    <PageWrapper>
      <Header />

      <main className="row mx-0 mt-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <BackLink to="/" name="Main" />
          <ContentTitle title="Login" />
          <LoginForm />
          <ForgotYourPasswordLink />
          <RegisterLink />
        </section>

        <SideAds />
      </main>

      <Footer />
    </PageWrapper>
  );
}

export default Login;
