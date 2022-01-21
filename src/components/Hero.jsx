import { HeroStyle } from "../assets/css/Hero.styled";
import { HeroImgStyle } from "../assets/css/HeroImgStyle.styled";
import image from "../assets/img/emoji.png";

const Hero = () => {
  return (
    <HeroStyle>
      <div className="title">
        <h1>Hi, My name is ibrahim</h1>
        <p>Im a frontend developer from Lagos, Nigeria.</p>
      </div>
      <HeroImgStyle>
        <div>
          <img src={image} />
        </div>
      </HeroImgStyle>
    </HeroStyle>
  );
};

export default Hero;
