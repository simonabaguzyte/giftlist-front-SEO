import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "src/components/Header";
import Nav from "src/components/Nav";
import PageWrapper from "src/components/PageWrapper";
import Footer from "src/components/Footer";
import SideAds from "src/components/SidePoster";
import ContentTitle from "src/components/ContentTitle";
import BrandsLogos from "src/components/BrandsLogos";
import BackLink from "src/components/BackLink";

function AddNewGiftForm({ giftListId }) {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    size: "",
    color: "",
    quantity: "",
    note: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:8000/gift-lists/${giftListId}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        ...formData,
        quantity: parseInt(formData.quantity),
      }),
    });

    navigate(`/my-lists/${giftListId}`);
  };

  return (
    <form
      className="form mt-4"
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

      <div className="form-group">
        <label htmlFor="link">Link</label>
        <input
          type="text"
          className="form-control"
          id="link"
          value={formData.link}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="size">Size</label>
        <input
          type="text"
          className="form-control"
          id="size"
          value={formData.size}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input
          type="text"
          className="form-control"
          id="color"
          value={formData.color}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          className="form-control"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="note">Note</label>
        <textarea
          className="form-control"
          id="note"
          value={formData.note}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="my-4 d-flex justify-content-center">
        <button type="submit" className="btn btn-success mr-4">
          Save
        </button>
      </div>
    </form>
  );
}

function NewGift() {
  const { id } = useParams();

  return (
    <PageWrapper>
      <Header />
      <Nav />

      <main className="row mx-0 mt-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <BackLink to={`/my-lists/${id}`} />
          <ContentTitle title="Adding a new item:" />
          <AddNewGiftForm giftListId={id} />
          <BrandsLogos />
        </section>

        <SideAds />
      </main>

      <Footer />
    </PageWrapper>
  );
}

export default NewGift;
