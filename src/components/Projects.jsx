import { HeroStyle } from "../assets/css/Hero.styled";
import { ProjectsImgStyle } from "../assets/css/ProjectsImgStyle.styled";
import { Button } from "../assets/css/Button.styled.js";

const Projects = ({ title, image, summary, tools }) => {
  return (
    <>
      <HeroStyle>
        <ProjectsImgStyle className="about">
          <div>
            <img src={image} />
          </div>
        </ProjectsImgStyle>
        <div className="title">
          <h4>{title}</h4>
          <p>
            <span>Summary: </span> {summary}
          </p>
          <p>
            <span>Tools: </span> {tools}
          </p>
          <Button>GET TO KNOW ME</Button>
        </div>
      </HeroStyle>
    </>
  );
};

export default Projects;
