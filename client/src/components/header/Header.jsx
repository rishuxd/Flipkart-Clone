import styled from "styled-components";
import Search from "./Search";
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const navigate = useNavigate();

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Container>
      <WidthContainer>
        <Link
          to="/"
          style={{ textDecoration: "none", display: "flex", color: "#fff" }}
        >
          <LogoDiv>
            <a>
              <img
                width={130}
                height={22}
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
                alt=""
              />
            </a>
            <a>
              <span>Explore</span>
              <span>Plus</span>
              <img
                height={10}
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                alt=""
              />
            </a>
          </LogoDiv>
        </Link>
        <SearchContainer>
          <Search />
        </SearchContainer>

        <BecomeASeller>
          <a>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt=""
            />
            <span>Become a Seller</span>
          </a>
        </BecomeASeller>

        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginButton>
            <a onClick={() => openDialog()}>Login</a>
          </LoginButton>
        )}
        <Cart>
          <a onClick={() => navigate("/cart")}>
            <Badge badgeContent={account.cartItems?.length} color="success">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                alt=""
              />
            </Badge>
            <p>Cart</p>
          </a>
        </Cart>
        <Dot>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
            alt=""
          />
        </Dot>
        <LoginDialog open={open} setOpen={setOpen} />
      </WidthContainer>
      <OutsideSearch>
        <Search />
      </OutsideSearch>
    </Container>
  );
};

// ----------------------- CSS --------------------

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 9999;
`;

const WidthContainer = styled.div`
  max-width: 96rem;
  padding: 12px 28px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 137px;
  align-items: flex-end;
  margin-right: 36px;

  a {
    &:nth-child(2) {
      font-size: 12px;
      font-weight: 600;
      font-style: italic;
      font-family: inter_semi_bold, fallback-inter_semi_bold, Arial, sans-serif;

      span {
        &:first-child {
          color: #9e9e9e;
          margin-right: 4px;
        }
        color: #ffc200;
        margin-right: 2px;
      }

      img {
        margin-left: 4px;
      }
    }
  }
  @media (max-width: 768px) {
    margin-left: -60px;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const OutsideSearch = styled.div`
  padding: 12px 10px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const LoginButton = styled.div`
  flex: 0 0 auto;
  margin: 0 20px;
  a {
    background-color: #f1f3f6;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 32px;
    border: 1px solid #dbdbdb;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const BecomeASeller = styled.div`
  margin: 0 20px;
  cursor: pointer;
  flex: 0 0 auto;
  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    img {
      margin-right: 8px;
    }
  }
  @media (max-width: 768px) {
    display: none;
`;

const Cart = styled.div`
  flex: 0 0 auto;
  margin: 0 20px;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    p {
      margin-left: 10px;
    }
  }
`;

const Dot = styled(Cart)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
