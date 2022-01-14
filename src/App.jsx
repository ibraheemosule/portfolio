import Layout from "./components/Layout";
import GlobalStyle from "./assets/css/Global.styled";
import theme from "./assets/css/theme";
import { ThemeProvider } from "styled-components";

function App() {
  console.log(theme.theme1.navBgCol);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout />
      </>
    </ThemeProvider>
  );
}

export default App;
