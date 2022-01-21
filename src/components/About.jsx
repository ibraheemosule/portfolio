import { AboutStyle } from "../assets/css/AboutStyle.styled";
import { HeroStyle } from "../assets/css/Hero.styled";
import { AboutImgStyle } from "../assets/css/AboutImgStyle.styled";
import Blob from "../assets/svgs/Blob";
import image from "../assets/img/image.jpg";
import { Row } from "../assets/css/Row.styled";
import { Button } from "../assets/css/Button.styled.js";

const About = () => {
  return (
    <AboutStyle>
      <Blob />
      <Row>
        <h3>About Me</h3>
      </Row>
      <HeroStyle>
        <AboutImgStyle className="about">
          <div>
            <img src={image} />
          </div>
        </AboutImgStyle>
        <div className="title">
          <p>
            My name is Ibrahim Sule, and I'm a
            <strong> Front-End Developer</strong> from Lagos, Nigeria. I have an
            obsession for building pixel perfect user interfaces for the web and
            I'm looking forward to building yours.
          </p>
          <Button>GET TO KNOW ME</Button>
        </div>
      </HeroStyle>
    </AboutStyle>
  );
};

export default About;
