import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutCont id="about">
        <Heading>About</Heading>
        <p>
          What is it about pizza that makes it so hard to resist? Is it the
          lashings of melted cheese or the choice of so many different toppings?
          Well, whatever it is Rocket Pizza is just the place you need. With so
          many pizzas on the menu you are sure to find one to your liking. We are
          confident you will enjoy every bite and will come back for more! <br />
          <br />
          Opening Times: <br /> <strong>
          Tuesday to Sunday 11:30 – 23:59 <br />
          Monday CLOSED </strong>.
        </p>
      </AboutCont>
    </>
  );
};

const AboutCont = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  padding: 270px 50px 0;
  color: white;

  @media screen and (max-width: 600px) {
    padding: 260px 10px 0;
    font-size: 1.125rem;
    line-height: 30px;
    text-align: justify;
  }

  & p {
    position: relative;
    width: 80%;
    padding: 50px 30px;
    margin-top: 25px;
    background: linear-gradient(
      90deg,
      rgba(25, 28, 24, 0.85) 0%,
      rgba(54, 56, 53, 0.85) 100%
    );
    border: #191c18 3px solid;
    border-radius: 20px;
    box-shadow: 0px 5px 5px black inset;

    @media screen and (max-width: 600px) {
      width: 90%;
      padding: 30px 30px;
    }
  }
`;

const Heading = styled.h2`
  font-family: "Galada", cursive;
  font-size: 50px;
  text-shadow: 4px 4px 3px #BE2603;
  padding: 0 0 30px;
  cursor: default;
  z-index: 98;
`;

export default About;
