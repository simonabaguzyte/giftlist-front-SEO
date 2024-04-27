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

// Assume you have a component named BlogFigure
import BlogFigure from "src/components/BlogFigure";

import MoneyForGiftsImage from "src/img/articles/articles/money-for-gifts.jpg";
import MothersDayImage from "src/img/articles/articles/mothers-day.jpg";
import FitnessImage from "src/img/articles/articles/fitness-gifts.jpg";
import LastMinuteGiftImage from "src/img/articles/articles/last-minute-gift.jpg";
import TechGiftsImage from "src/img/articles/articles/tech-gifts.png";
import AffordableGiftsImage from "src/img/articles/articles/affordable-gifts.jpg";

function BlogPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/article/${1}`);

  return (
    <PageWrapper>
      <Header />
      <Nav />

      <main className="row mx-0 my-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <div>
            <h2 className="text-center">
              <b>GiftList Blog</b>
            </h2>

            <container className="d-flex box-container flex-wrap mt-4 justify-content-center">
              <figure className="d-flex flex-column align-items-center text-center p-3 rounded box-item2">
                <img
                  src={MoneyForGiftsImage}
                  alt="Money for gifts"
                  className="img-fluid"
                  style={{ width: "600px", height: "400px" }}
                />
                <br></br>
                <h4>2023.09.10 • 4 min. read</h4>
                <h3 className="item-name">
                  <b>
                    How much should you spend on Christmas and other
                    special-occasion gifts?
                  </b>
                </h3>
                <h4>
                  The history of gift giving goes back thousands of years. It
                  was practiced by ...
                </h4>
                <h4 onClick={handleClick} className="article-link">
                  <b>Continue reading</b>
                </h4>
              </figure>

              <figure className="d-flex flex-column align-items-center text-center p-3 rounded box-item2">
                <img
                  src={MothersDayImage}
                  alt="Mothers day gifts"
                  className="img-fluid"
                  style={{ width: "600px", height: "400px" }}
                />
                <br></br>
                <h4>2023.05.01 • 6 min. read</h4>
                <h3 className="item-name">
                  <b>7 Unique And Thoughtful Mothers Day Gift Ideas</b>
                </h3>
                <h4>
                  Mother's Day is a special day to show your appreciation for
                  the amazing women ...
                </h4>
                <h4 className="article-link">
                  <b>Continue reading</b>
                </h4>
              </figure>

              <figure className="d-flex flex-column align-items-center text-center p-3 rounded box-item2">
                <img
                  src={FitnessImage}
                  alt="Mothers day gifts"
                  className="img-fluid"
                  style={{ width: "600px", height: "400px" }}
                />
                <br></br>
                <h4>2024.01.14 • 5 min. read</h4>
                <h3 className="item-name">
                  <b>Fitness gift ideas 2024</b>
                </h3>
                <h4>
                  Is finding the ideal gift for your fitness enthusiast friends
                  a challenge? Look no ...
                </h4>
                <h4 className="article-link">
                  <b>Continue reading</b>
                </h4>
              </figure>
              <figure className="d-flex flex-column align-items-center text-center p-3 rounded box-item2">
                <img
                  src={LastMinuteGiftImage}
                  alt="Mothers day gifts"
                  className="img-fluid"
                  style={{ width: "600px", height: "400px" }}
                />
                <br></br>
                <h4>2023.12.16 • 4 min. read</h4>
                <h3 className="item-name">
                  <b>Last minute gift ideas for him and her</b>
                </h3>
                <h4>
                  Christmas is just a few days away and there’s so much to do.
                  We could miss out ...
                </h4>
                <h4 className="article-link">
                  <b>Continue reading</b>
                </h4>
              </figure>
              <figure className="d-flex flex-column align-items-center text-center p-3 rounded box-item2">
                <img
                  src={TechGiftsImage}
                  alt="Tech gifts"
                  className="img-fluid"
                  style={{ width: "600px", height: "400px" }}
                />
                <br></br>
                <h4>2023.05.01 • 6 min. read</h4>
                <h3 className="item-name">
                  <b>10 smart home tech gifts</b>
                </h3>
                <h4>
                  Technology is taking over! Let these smart-home gadgets make
                  everyday life simpler ...
                </h4>
                <h4 className="article-link">
                  <b>Continue reading</b>
                </h4>
              </figure>
              <figure className="d-flex flex-column align-items-center text-center p-3 rounded box-item2">
                <img
                  src={AffordableGiftsImage}
                  alt="Affordable gifts"
                  className="img-fluid"
                  style={{ width: "600px", height: "400px" }}
                />
                <br></br>
                <h4>2023.08.07 • 6 min. read</h4>
                <h3 className="item-name">
                  <b>8 Practical And Affordable Gifts</b>
                </h3>
                <h4>
                  Gift-giving can be difficult sometimes, but you’ll never go
                  wrong if you can give something ...
                </h4>
                <h4 className="article-link">
                  <b>Continue reading</b>
                </h4>
              </figure>
            </container>
          </div>

          <BrandsLogos />
        </section>

        <SideAds />
      </main>

      <Footer />
    </PageWrapper>
  );
}

export default BlogPage;
