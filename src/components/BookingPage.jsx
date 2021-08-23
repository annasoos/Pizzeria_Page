import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../images/hero-image.jpg";
import Footer from "./Footer";

const BookingPage = () => {
  const [state, setState] = useState({
    Name: "",
    Email: "",
    Date: "",
    Time: "",
    NumberOfAttendees: "",
    Comments: "",
  });

  // DATE PICKER INPUT SET TO ACTUAL DATE

  let date = new Date();

  let actualDay =
  date.getFullYear().toString() +
  "-" +
  (date.getMonth() + 1).toString().padStart(2, 0) +
  "-" +
  date.getDate().toString().padStart(2, 0);

  // TIME PICKER INPUT SET TO 1 HOUR FROM ACTUAL TIME

  function timeFunc(){

    let timeInput = document.getElementById("timeInput");
    let dateInput = document.getElementById("dateInput");

    let time = new Date();

	  time.setHours(time.getHours() + 1);

	  let minTime = time.getHours()+ ":" + time.getMinutes(); 

    if (dateInput.value === actualDay){
      timeInput.min = minTime
    }
    
  };

  // PREVENT FORM TO RE-RENDER AFTER SUBMITTING

  function submitFunc(event) {
    event.preventDefault();

    let buttonInput = document.getElementById("submitBtn");

    if (document.getElementById("submitMsg")) {
      document.getElementById("submitMsg").remove();
    }
    buttonInput.insertAdjacentHTML(
      "afterend",
      `<div id="submitMsg" style="color: #70e000; font-weight: bold; font-size: 22px;"> Thank you for your reservation, please check your e-mails for our confirmation! </div>`
    );

    console.log(state);
    return false;
  }

  // SUBMIT MESSAGE

  function buttonFunc() {
    
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let dateInput = document.getElementById("dateInput");
    let timeInput = document.getElementById("timeInput");
    let numInput = document.getElementById("numInput");
    let commentInput = document.getElementById("commentInput");

    setState({
      Name: nameInput.value,
      Email: emailInput.value,
      Date: dateInput.value,
      Time: timeInput.value,
      NumberOfAttendees: numInput.value,
      Comments: commentInput.value,
    });

    if(numInput.value === "10+"){
      commentInput.setAttribute("required", true)
    };

  };


  return (
    <>
      <FormWrap>
        <Form id="form" onSubmit={submitFunc}>
          <Title>Table Reservation</Title>

          <Label>Name *</Label>
          <input type="text" id="nameInput" required />

          <Label>Email *</Label>
          <input id="emailInput" type="email" onBlur={blurFunc} placeholder="myemail@example.com" required/>

          <Label>Date *</Label>
          <input id="dateInput" type="date" defaultValue={actualDay} min={actualDay} required/>

          <Label>Time *</Label>
          <input id="timeInput" type="time" min="11:30" max="23:00" onFocus={timeFunc} required />

          <Label id="guestNum">Number of Attendees *</Label>
          <select id="numInput">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="10+">10+ (Please specify in comments)</option>
          </select>

          <Label id="comments">Comments / Additional Requests</Label>
          <textarea id="commentInput"></textarea>

          <button id="submitBtn" onClick={buttonFunc}> Book a table </button>
        </Form>
      </FormWrap>
      <Subtitle>Looking forward to see you!</Subtitle>
      <div className="img-wrap">
        <img className="img" src={HeroImage} alt="Rocket Pizza" />
      </div>
      <Footer />
    </>
  );
};


// EMAIL ERROR MESSAGE

function blurFunc(event) {
  let emailInput = event.target;
  let regexMatch = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(
    emailInput.value
  );

  if (regexMatch === false) {
    if (document.getElementById("errorMsg")) {
      document.getElementById("errorMsg").remove();
    }
    emailInput.insertAdjacentHTML(
      "afterend",
      `<div id="errorMsg" style="color: red; font-weight: bold; font-size: 22px; text-shadow: 1px 1px black;"> E-mail address is invalid! </div>`
    );
  } else {
    if (document.getElementById("errorMsg")) {
      document.getElementById("errorMsg").remove();
    }
  }
}


// STYLING

const FormWrap = styled.div`
  width: 100%;
  height: calc(100vh + 12.5rem);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: calc(100vh + 500px)
  }
`;

const Title = styled.h1`
  grid-column: 1 / span 3;
  font-family: "Galada", cursive;
  font-size: 4rem;
  padding-top: 50px;
  text-shadow: 4px 4px 3px #be2603;
  cursor: default;
  z-index: 99;

  @media screen and (max-width: 600px) {
    grid-column: 1 / span 2;
    padding-top: 30px;
    font-size: 3rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 80px 150px 1fr;
  width: 50%;
  height: calc(100vh - 100px);
  margin-top: 100px;
  text-align: center;
  color: white;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    left: 0;
    width: 100%;
  }

  & input,
  textarea,
  select {
    position: relative;
    grid-column: 2 / span 2;
    height: 50px;
    padding: 5px;
    margin: 10px 0 10px 20px;
    color: white;
    background: linear-gradient(
      90deg,
      rgba(25, 28, 24, 0.85) 0%,
      rgba(54, 56, 53, 0.85) 100%
    );
    border: #191c18 3px solid;
    border-radius: 20px;
    box-shadow: 0px 5px 5px black inset;
    font-size: 18px;

    @media screen and (max-width: 600px) {
      grid-column: 1 / span 2;
      margin: 10px 20px 10px 20px;
    }
  }

  & ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  & textarea {
    grid-column: 1 / span 3;
    height: 100px;
  }

  & #guestNum {
    grid-column: span 2;
  }

  & #comments {
    grid-column: span 3;
    margin-top: 20px;

    @media screen and (max-width: 600px) {
      margin-top: 150px;
    }
  }

  & #errorMsg {
    grid-column: 2 / span 2;
  }

  & option {
    background: rgb(25, 28, 24);
    font-size: 18px;
  }

  & button {
    display: block;
    grid-column: span 3;
    width: 150px;
    height: 50px;
    margin: 20px 0;
    justify-self: center;
    border: #191c18 3px solid;
    border-radius: 20px;
    color: white;
    background: linear-gradient(
      90deg,
      rgba(25, 28, 24, 0.85) 0%,
      rgba(54, 56, 53, 0.85) 100%
    );
    font-size: 18px;
    cursor: pointer;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: #be2603;
    }
  } 

  & #submitMsg {
    grid-column: 1 / span 3;
  }
`;

const Subtitle = styled.h2`
  grid-column: span 3;
  margin: 20px 0;
  font-size: 2rem;
  text-align: center;
  color: white;
  font-family: "Kaushan Script", cursive;
  text-shadow: 3px 3px 3px #be2603;
  cursor: default;
  z-index: 99;

  @media screen and (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

const Label = styled.div`
  font-size: 1.2rem;
  justify-self: flex-start;
  align-self: center;

  text-shadow: 3px 3px 3px #be2603;

  @media screen and (max-width: 600px) {
    grid-column: 1;
    justify-self: center;
  }
`;

export default BookingPage;
