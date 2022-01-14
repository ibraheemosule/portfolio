import { Navbar } from "../assets/css/Navbar.styled.js";
import logo from "../assets/img/letter.png";
import CallLogo from "../assets/svgs/CallLogo.jsx";
import EmailLogo from "../assets/svgs/EmailLogo";
import FacebookLogo from "../assets/svgs/FacebookLogo";
import FileLogo from "../assets/svgs/FileLogo";
import LinkedinLogo from "../assets/svgs/LinkedinLogo";
import HomeLogo from "../assets/svgs/HomeLogo";
import WhatsappLogo from "../assets/svgs/WhatsappLogo";
import PersonLogo from "../assets/svgs/PersonLogo";
import TwitterLogo from "../assets/svgs/TwitterLogo";
import LetterLogo from "../assets/svgs/Letter.jsx";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const trueToggler = () => setToggle(true);
  const falseToggler = () => setToggle(false);

  return (
    <Navbar
      toggle={toggle}
      onMouseEnter={trueToggler}
      onMouseLeave={falseToggler}
    >
      {/* <img src={logo} /> */}
      <div>
        <LetterLogo />
      </div>
      <ul>
        <li>
          <a href="#">
            <HomeLogo /> <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <PersonLogo /> <span>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FileLogo /> <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#">
            <CallLogo /> <span>Contact</span>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">
            <WhatsappLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <LinkedinLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <EmailLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookLogo />
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;
