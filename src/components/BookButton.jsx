import React from "react";
import { useHistory } from "react-router-dom";
import BookingPage from "./BookingPage";
import BookIcon from "../icons/book-a-table.png";
import styled from "styled-components";


const BookButton = () => {
	const history = useHistory();

	function navigate(){
		history.push("/BookingPage")
	}

  return (
		<Button onClick={navigate} >
			<img className="navIcon" src={BookIcon} alt="booking" />
			 Book a table and taste your favourite 
		</Button>
	)
};


const Button = styled.button`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    90deg,
    rgba(25, 28, 24, 0.85) 0%,
    rgba(54, 56, 53, 0.85) 100%
  );
  border-radius: 20px;
  box-shadow: 0px 5px 5px black, 0px 3px 5px #454743 inset;
  width: 450px;
  color: white;
  padding: 15px 32px;
  margin: 90px 0;
  text-align: center;
  font-family: "Kaushan Script", cursive;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: #be2603;
  }

  @media screen and (max-width: 600px) {
	  width: 85%;
	  box-shadow: 0px 5px 5px black, 0px 3px 5px #454743 inset;
  }
`;

export default BookButton;
