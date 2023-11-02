import styled from "styled-components";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Profile = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    props.setAccount(null);
    localStorage.clear();
  };

  return (
    <>
      <Username onClick={handleClick}>
        <a>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-815786.svg"
            alt=""
          />
          <span>{props.account.firstname}</span>
        </a>
      </Username>
      <MenuCont anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <Logout>Logout</Logout>
        </MenuItem>
      </MenuCont>
    </>
  );
};

const Username = styled.div`
  margin: 0 20px;
  flex: 0 0 auto;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    background-color: #f1f3f6;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 16px;
    border: 1px solid #dbdbdb;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    img {
      margin-right: 8px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const Logout = styled.div`
  font-size: 14px;
`;

const MenuCont = styled(Menu)`
  margin-top: 25px;
  margin-left: 20px;
`;

export default Profile;
