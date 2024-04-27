import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "src/components/Header";
import Nav from "src/components/Nav";
import PageWrapper from "src/components/PageWrapper";
import Footer from "src/components/Footer";
import SideAds from "src/components/SidePoster";
import ContentTitle from "src/components/ContentTitle";
import BrandsLogos from "src/components/BrandsLogos";
import BackLink from "src/components/BackLink";
import AddFigure from "src/components/AddFigure";

function GiftFigure({ name, imgSrc, imgAlt }) {
  return (
    <figure
      className="d-flex flex-column align-items-center text-center p-3 rounded box-item"
      style={{
        backgroundColor: "rgb(235, 232, 232)",
        height: "230px",
        width: "190px",
      }}
    >
      <h3 className="item-name">{name}</h3>
      <img src={imgSrc} alt={imgAlt} className="img-fluid rounded-circle" />
    </figure>
  );
}

function GiftList() {
  const [gifts, setGifts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/gift-lists/${id}/items`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setGifts(data));
  }, []);

  return (
    <PageWrapper>
      <Header />
      <Nav />

      <main className="row mx-0 mt-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <BackLink to="/my-lists" />
          <div>
            <ContentTitle title="Gift list items" />

            <div className="d-flex flex-wrap mt-4" style={{ gap: "20px" }}>
              {gifts.map((gift) => (
                <GiftFigure
                  key={gift.id}
                  name={gift.name}
                  imgSrc={gift.link}
                  imgAlt={gift.name}
                />
              ))}
              <AddFigure to={`/my-lists/${id}/new`} />
            </div>
          </div>

          <BrandsLogos />
        </section>

        <SideAds />
      </main>

      <Footer />
    </PageWrapper>
  );
}

export default GiftList;
