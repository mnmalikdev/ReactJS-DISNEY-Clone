import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <BgImage />
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <Signup>GET IT ALL HERE !</Signup>
          <Description>
            Stream full seasons of exclusive series, current-season episodes, hit movies, Disney Originals, kids shows, and more.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 650px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const Signup = styled.a`
  font-weight: bold;
  font-size: 22px;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  margin: 2 2 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
