import { LayoutStyle } from "../assets/css/LayoutStyle.styled.js";
import Nav from "./Navbar";
import MainBody from "./MainBody";

const Layout = () => {
  return (
    <LayoutStyle>
      <Nav />
      <MainBody />
    </LayoutStyle>
  );
};

export default Layout;
