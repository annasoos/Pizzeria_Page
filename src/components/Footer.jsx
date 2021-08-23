import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <FooterCont>
				<label>Rocket Pizza - 2021</label>
				<img className="footerLogo" src={Logo} alt="logo" />
				<address id="contactInfo">
					<div>Contact Us:</div>
					<div>0630/388-1212</div>
					<div>contact@rocketpizza.com</div>
				</address>
    </FooterCont>
  );
};

const FooterCont = styled.div`
  display: flex;
	justify-content: space-between;
	align-items: center;
  position: relative;
  width: 100%;
  height: 90px;
  bottom: 0;
	margin-top: 50px;
	padding: 20px;
	color: white;
	font-size: 14px;
  background-color: #191c18dd;
  box-shadow: 0 10px 10px;
  z-index: 100;

	& .footerLogo{
  width: 80px;
	};

	& #contactInfo {
		line-height: 1.6;
		text-align: right;
		font-style: normal;
	}
`;


export default Footer;