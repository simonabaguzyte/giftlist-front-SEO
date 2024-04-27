import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import SideAds from "src/components/SidePoster";
import BackLink from "src/components/BackLink";
import PageWrapper from "src/components/PageWrapper";
import ContentTitle from "src/components/ContentTitle";

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    });

    navigate("/login");
  };

  return (
    <form
      className="form mt-4"
      onSubmit={handleSubmit}
      style={{ minWidth: "400px", maxWidth: "500px" }}
    >
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={formData.email}
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
      <div className="form-group">
        <label htmlFor="repeatPassword">Repeat password</label>
        <input
          type="password"
          className="form-control"
          id="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-light mr-4">
          Register
        </button>
      </div>
    </form>
  );
}

function Register() {
  return (
    <PageWrapper>
      <Header />
      <main className="row mx-0 mt-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <BackLink to="/" name="Main" />
          <ContentTitle title="Register" />
          <RegisterForm />
        </section>

        <SideAds />
      </main>

      <Footer />
    </PageWrapper>
  );
}

export default Register;
