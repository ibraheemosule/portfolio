import image from "../assets/img/image";
import Projects from "./Projects";
import { ProjectsStyle } from "../assets/css/ProjectsStyle.styled";
import { Row } from "../assets/css/Row.styled";
const ProjectsLayout = () => {
  const { githubtrends, bejamas, weatherapp } = image;
  return (
    <ProjectsStyle>
      <Row>
        <h3>Projects</h3>
      </Row>
      <Projects
        title="github tending page clone"
        image={githubtrends}
        summary="Created a replica of github trending clone page"
        tools="react, typescript, tailwind"
      />
    </ProjectsStyle>
  );
};

export default ProjectsLayout;
