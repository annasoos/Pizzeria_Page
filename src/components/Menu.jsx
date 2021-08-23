import React, { useState, useEffect } from "react";
//import pizza images
import PizzaImg1 from "../images/pizza_image (1).jpg";
import PizzaImg2 from "../images/pizza_image (2).jpg";
import PizzaImg3 from "../images/pizza_image (3).jpg";
import PizzaImg4 from "../images/pizza_image (4).jpg";
import PizzaImg5 from "../images/pizza_image (5).jpg";
import PizzaImg6 from "../images/pizza_image (6).jpg";
//import fire & styling
import Fire from "../icons/fire.png";
import styled from "styled-components";

//RANDOM PIZZA IMAGES ON PIZZA CARDS

let imageArray = [
  PizzaImg1,
  PizzaImg2,
  PizzaImg3,
  PizzaImg4,
  PizzaImg5,
  PizzaImg6,
];

function getRandomImage(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  let image = array[randomNum];

  return image;
};

//RANDOM FIRE ICONS ON PIZZA CARDS

function getRandomFire(i) {
  let randomNum = Math.floor(Math.random() * i.length);

  if (randomNum > 3) {
    return <img className="fireIcon" src={Fire} alt="fire" />;
  }
}

// USING STATE HANDLER HOOK AND STORE FETCHED JSON TO STATE DATA (Our JSON File must be placed in public folder!)

const Menu = () => {
  const [data,setData] = useState([]);

  const getData=()=>{
    fetch("./pizzalist.json") // We pass public folder file name only. Do NOT use absolute path like "./public/pizzalist.json"
      .then(
        function(response){
        return response.json();
      })
      .then(
        function(data) {
        console.log(data)
        setData(data)
      })
      .catch(
        function(error){
          console.log(error, "error")
        }
      );
  }

  useEffect(()=>{getData()},[])

  
  return (
    <>
      <Title id="menu">Menu</Title>
      <PizzaCont>
        {data.map((pizza, index) => (
          <PizzaCard className="menuCards" key={index}>
            <img className="pizzaImg" src={getRandomImage(imageArray)} alt="pizza" />
            {getRandomFire(imageArray)} 
            <span> <b>{pizza.name}</b> </span>
            <span> <b>Toppings:</b> </span> 
            <span> {pizza.toppings} </span><br />
            <span>24 cm: {pizza.priceSmall}</span>
            <span>32 cm: {pizza.priceBig}</span>
          </PizzaCard>
        ))}
      </PizzaCont>
    </>
  );
};

//STYLING

const Title = styled.h1`
  padding: 100px 0 30px;
  color: white;
  font-family: "Galada", cursive;
  font-size: 50px;
  text-align: center;
  text-shadow: 4px 4px 3px #be2603;
  cursor: default;

  @media screen and (max-width: 600px) {
    padding: 80px 0 30px;
  }
`;

const PizzaCont = styled.div`
  margin: 0 50px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin: 0 30px;
    grid-template-columns: 100%;
  }
`;

const PizzaCard = styled.p`
  margin: 30px 0;
  width: 90%;
  height: 550px;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  text-align: center;
  font-size: 20px;
  color: white;
  background: linear-gradient(
    90deg,
    rgba(25, 28, 24, 0.85) 0%,
    rgba(54, 56, 53, 0.85) 100%
  );
  border: #191c18 3px solid;
  border-radius: 20px;
  box-shadow: 0px 5px 5px black inset;

  @media screen and (max-width: 600px) {
    padding: 30px;
    width: 100%;
  }

  & span:first-of-type {
    text-align: center;
    font-family: "Kaushan Script", cursive;
    font-size: 32px;
    margin: 15px 0;
  }

  & span {
    line-height: 30px;
  }
`;

export default Menu;
