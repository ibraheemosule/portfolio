import { Row } from "../assets/css/Row.styled";
import { Container } from "../assets/css/Container.styled";
import { MainBodyStyle } from "../assets/css/MainBody.styled";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ProjectsLayout from "./ProjectsLayout";

const MainBody = () => {
  return (
    <MainBodyStyle>
      <Container>
        <Hero />
      </Container>
      <About />
      <Skills />
      <ProjectsLayout />
    </MainBodyStyle>
  );
};

export default MainBody;
