import React from "react";
import HeroImage from "../images/hero-image.jpg";
import styled from "styled-components";
import Brush from "../images/brush-stroke.png";

const LandingPage = () => {
  return (
    <>
      <Container>
        <Title>Rocket Pizza</Title>
        <Welcome>Welcome to our restaurant!</Welcome>
        <img id="brushStroke" src={Brush} alt="brush stroke" />
        
      </Container>
      <div className="img-wrap">
        <img className="img" src={HeroImage} alt="Rocket Pizza" />
      </div>
    </>
  );
};

//STYLING

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 45% 150px 50px auto;
  width: 100%;
  height: 100vh;
  z-index: 98;

  @media screen and (max-width: 600px) {
    grid-template-rows: 40% 100px 50px auto;
  }
`

const Title = styled.h1`
  grid-column: 1;
  grid-row: 2;
  justify-self: center;
  color: #fff;
  font-family: "Galada", cursive;
  font-size: 6.25rem;
  text-shadow: 4px 4px 3px #be2603;
  cursor: default;
  z-index: 99;

  @media screen and (max-width: 600px) {
    font-size: 3.75rem;
  }
`;

const Welcome = styled.h2`
  grid-column: 1;
  grid-row: 3;
  justify-self: center;
  align-self: center;
  color: #fff;
  font-size: 2rem;
  font-family: "Kaushan Script", cursive;
  text-shadow: 3px 3px 3px #be2603;
  cursor: default;
  z-index: 99;

  @media screen and (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

export default LandingPage;
