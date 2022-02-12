import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import New from "./New";
import Recommend from "./Recommend";
import Viewers from "./Viewers";
const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
      <New />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 400px);
  overflow-x: hidden;
  display: block;
  top: 90px;

  &:after {
    background: url("./images/home-background.png") no-repeat fixed;
    background-size: cover;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
