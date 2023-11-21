import React from "react";
import Header from "./../components/Header";
import BannerSlider from "./../components/BannerSlider";
import PaymentBlock from "./../components/PaymentBlock";
import Container from "./../components/Container";
import Recommend1 from "../components/Recommend1";


const Home = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '25px' }}></div>
      <BannerSlider />
      <Container>
        <PaymentBlock />
      </Container>
      <Container>
        <Recommend1 />
      </Container>


    </>
  );
};

export default Home;