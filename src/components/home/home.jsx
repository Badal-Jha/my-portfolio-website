import React from "react";
import "./home.css";
import Header from "../header/header";
import Body from "../body/body";
import Footer from "../footer/footer";
const Home = () => {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
