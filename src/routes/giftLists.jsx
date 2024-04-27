import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "src/components/Header";
import Nav from "src/components/Nav";
import PageWrapper from "src/components/PageWrapper";
import Footer from "src/components/Footer";
import SideAds from "src/components/SidePoster";
import ContentTitle from "src/components/ContentTitle";
import BrandsLogos from "src/components/BrandsLogos";
import AddFigure from "src/components/AddFigure";

function GiftListFigure({ name, noOfItems, lastModified, id }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/my-lists/${id}`);

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
      <h3>{name}</h3>
      <h4>Number of items: {noOfItems}</h4>
      <h4>Last modified: {lastModified}</h4>
    </figure>
  );
}

function GiftLists() {
  const [giftLists, setGiftLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/gift-lists", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setGiftLists(data));
  }, []);

  return (
    <PageWrapper>
      <Header />
      <Nav />

      <main className="row mx-0 my-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <div>
            <ContentTitle title="My gift lists" />
            <div
              className="d-flex flex-wrap mt-4 justify-content-center"
              style={{ gap: "20px" }}
            >
              {giftLists.map((giftList) => (
                <GiftListFigure
                  key={giftList.id}
                  name={giftList.name}
                  noOfItems={giftList.items.length}
                  lastModified={giftList.last_updated
                    .substring(0, 10)
                    .replaceAll("-", ".")}
                  id={giftList.id}
                />
              ))}
              <AddFigure to="/my-lists/new" />
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

export default GiftLists;
