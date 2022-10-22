import React from "react";
import "./home.css";
import background from "../../images/bg.jpg";
import Header from "../header/header";

function Home() {
  return (
    <div className="home">
      <Header />
      <img src={background} alt="home background" className="background"></img>
    </div>
  );
}

export default Home;
