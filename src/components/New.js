import { Link } from "react-router-dom";
import styled from "styled-components";
const New = (props) => {
  return (
    <Container>
      <h4>New To Disney +</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="https://lumiere-a.akamaihd.net/v1/images/p_artemisfowl_19732_ece7d5ad.jpeg?region=0%2C0%2C540%2C810" alt="disney sample pic" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://d9nvuahg4xykp.cloudfront.net/6072110142929836604/929265049840475512.jpg" alt="disney sample pic" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://in.bmscdn.com/content-buzz/2021/09/disneyblog.jpg" alt="disney sample pic" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://www.parisbeacon.com/wp-content/uploads/2021/11/Marvel-Studios-IMAX-en-Disney-Plus.jpg" alt="disney sample pic" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px 25px;
  h4 {
    font-size: 19px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 50.25%;
  margin-left: 2px;
  margin-right: 19px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default New;
