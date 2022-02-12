import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";
import { auth, provider } from "../firebase";

//header component.
const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // moniter auth state. if user signs in , redirect him to homepage
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);
  //handle auth ftn
  const handleAuth = async () => {
    provider.addScope("profile");
    provider.addScope("email");
    if (!userName) {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user).catch((error) => {
        alert(error.message);
      });
      console.log(result);
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  //dispatch ftn
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  //UI of the COMPONENT
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney Logo" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="home" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="home" />
              <span>WATCHLIST</span>
            </a>
            <a href="/original">
              <img src="/images/original-icon.svg" alt="home" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="home" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="home" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Signout>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </Signout>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 120px;
  margin-top: 4px;
  margin-bottom: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img: {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 50px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 12px;
    padding-left: 4px;
    img {
      width: 30px;
      min-width: 30px;
      margin-right: 3px;
      height: 30px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 14px;
      letter-spacing: 1.5px;
      line-height: 1.5;
      padding: 5px 0px;
      margin-top: 5px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        content: "";
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0ms;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 17px;
  padding: 12px 20px;
  letter-spacing: 1.5;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const Signout = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Header;
