import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import components
import LandingPage from "./LandingPage";
import BookingPage from "./BookingPage";
import About from "./About";
import MenuPage from "./Menu";
import Footer from "./Footer";
import BookButton from "./BookButton";
//import style & icons
import styled from "styled-components";
import Logo from "../images/logo.png";
import HomeIcon from "../icons/home.png";
import AboutIcon from "../icons/about.png";
import MenuIcon from "../icons/menu.png";
import BookIcon from "../icons/book-a-table.png";

const Main = () => {
  const [btnClass, setBtnClass] = useState("");
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  useEffect(() => {
    if (clicked === true) {
      setBtnClass("open");
    } else {
      setBtnClass("");
    }
  }, [clicked]);

  return (
    <Router>
      <div>
        <Header className={btnClass}>
          <img className="logo" src={Logo} alt="logo" />
          <ul className={btnClass}>
            <li>
              <img className="navIcon" src={HomeIcon} alt="home" />
              <Link to="/"> Home</Link>
            </li>
            <li>
              <img className="navIcon" src={AboutIcon} alt="about" />{" "}
              <Link to="/About"> About</Link>
            </li>
            <li>
              <img className="navIcon" src={MenuIcon} alt="menu" />{" "}
              <Link to="/Menu"> Menu</Link>
            </li>
            <li>
              <img className="navIcon" src={BookIcon} alt="booking" />
              <Link to="/BookingPage"> Book a table</Link>
            </li>
          </ul>
          <MobileBtn onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
          </MobileBtn>
        </Header>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <AboutUs />
          </Route>
          <Route exact path="/Menu">
            <Menu />
          </Route>
          <Route path="/BookingPage">
            <Booking />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  ScrollToTop();
  return (
    <>
      <LandingPage />
      <About />
      <MenuPage />
      <BookButton />
      <Footer />
    </>
  );
}

function AboutUs() {
  AboutScroll();
  return (
    <>
      <LandingPage />
      <About />
      <MenuPage />
      <BookButton />
      <Footer />
    </>
  );
}

function Menu() {
  MenuScroll();
  return (
    <>
      <LandingPage />
      <About />
      <MenuPage />
      <BookButton />
      <Footer />
    </>
  );
}

function Booking() {
  ScrollToTop();
  return <BookingPage />;
}

function ScrollToTop() {
  window.scroll(0, 0);
}

function AboutScroll() {
  let aboutElement = document.getElementById("about")
  aboutElement.scrollIntoView();
}

function MenuScroll() {
  let menuElement = document.getElementById("menu")
  menuElement.scrollIntoView();
}

//STYLING

const Header = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 90px;
  top: 0;
  background-color: #191c18dd;
  box-shadow: 0 10px 10px;
  z-index: 100;
  transition: all 0.5s ease-out;

  & ul {
    width: 100%;
    padding-left: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: transform 0.5s ease-out;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 50px;
      align-self: center;
      transform: translateY(-500px);
      &.open {
        transform: translateY(0)
      }
    }

  } & li {
    font-family: "Kaushan Script", cursive;
    font-size: 1.75rem;
    font-weight: bold;
    list-style-type: none;
  } & a {
    color: white;
    transition: all 200ms ease-in-out;
  } &:visited {
    color: white;
  } & a:hover {
    color: #be2603;
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    &.open {
      background-color: #191c18ee;
      height: 80%;
    }
  }
`;

const MobileBtn = styled.a`
  top: 0;
  right: 0;
  margin: 30px 20px 30px 20px;
  width: 40px;
  height: 35px;
  cursor: pointer;
  z-index: 101;

  & span {
    display: block;
    width: 40px;
    height: 5px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 20px;
  }

  @media screen and (min-width: 599px) {
    visibility: hidden;
  }
`;

export default Main;
