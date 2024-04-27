import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "src/components/Header";
import Nav from "src/components/Nav";
import PageWrapper from "src/components/PageWrapper";
import Footer from "src/components/Footer";
import SideAds from "src/components/SidePoster";
import ContentTitle from "src/components/ContentTitle";
import BrandsLogos from "src/components/BrandsLogos";
import BackLink from "src/components/BackLink";

function AddGiftListForm() {
  const [formData, setFormData] = useState({ name: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/gift-lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(formData),
    });

    navigate("/my-lists");
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      style={{ minWidth: "400px", maxWidth: "500px" }}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </div>
    </form>
  );
}

function NewGiftList() {
  return (
    <PageWrapper>
      <Header />
      <Nav />

      <main className="row mx-0 mt-4">
        <section className="col-9 d-flex flex-column align-items-center justify-content-center">
          <BackLink to="/my-lists" name="My lists" />
          <ContentTitle title="Add a new list" />

          <div className="d-flex box-container flex-wrap mt-4 justify-content-center">
            <AddGiftListForm />
          </div>

          <BrandsLogos />
        </section>

        <SideAds />
      </main>

      <Footer />
    </PageWrapper>
  );
}

export default NewGiftList;
