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

function BlogPageFigure({ title, author, date, id }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/blog/${id}`);

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
      <h3>{title}</h3>
      <h4>Author: {author}</h4>
      <h4>Date: {date}</h4>
    </figure>
  );
}

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blog-posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBlogPosts(data));
  }, []);

  return (
    <PageWrapper>
      <Header />
      <Nav />

      <main className="row mx-0 my-4">
        <section className="col-9 d-flex flex-column align-items-center">
          <div>
            <ContentTitle title="Blog Posts" />
            <div
              className="d-flex flex-wrap mt-4 justify-content-center"
              style={{ gap: "20px" }}
            >
              {blogPosts.map((post) => (
                <BlogPageFigure
                  key={post.id}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  id={post.id}
                />
              ))}
              <AddFigure to="/blog/new" />
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

export default BlogPage;
