import { Dialog } from "@mui/material";
import styled from "styled-components";
import { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../services/api";
import { DataContext } from "../../context/DataProvider";

// ------------------------------ CONSTANTS --------------------------------

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  userId: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  userId: "",
  password: "",
};
// ------------------------------ FUNCTIONS --------------------------------

const LoginDialog = (props) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [loginError, setLoginError] = useState(false);

  const handleClose = () => {
    props.setOpen(false);
    toggleAccount(accountInitialValues.login);
    setLoginError(false);
  };

  const toggleSignup = () => {
    account === accountInitialValues.login
      ? toggleAccount(accountInitialValues.signup)
      : toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup);
    localStorage.setItem("user", JSON.stringify(signup));
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data);
      localStorage.setItem("user", JSON.stringify(response.data.data));
    } else {
      setLoginError(true);
    }
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <Container>
        <Left>
          <span>{account.heading}</span>
          <p>{account.subHeading}</p>
        </Left>

        {account.view === "login" ? (
          <Right>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Username"
                onChange={(e) => onValueChange(e)}
                name="userId"
                variant="standard"
              />
            </TextMargin>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Password"
                onChange={(e) => onValueChange(e)}
                name="password"
                variant="standard"
              />
            </TextMargin>
            {loginError && (
              <LoginError>Please enter valid username or password !</LoginError>
            )}
            <LoginTerms>
              By continuing, you agree to Flipkart's
              <a> Terms of Use </a>
              and
              <a> Privacy Policy</a>
            </LoginTerms>
            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <RequestOTP>
              <a>Request OTP</a>
            </RequestOTP>
            <NewAccount>
              <a onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </a>
            </NewAccount>
          </Right>
        ) : (
          <Right>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Firstname"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
              />
            </TextMargin>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Lastname"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
              />
            </TextMargin>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Username"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="userId"
              />
            </TextMargin>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Email"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
              />
            </TextMargin>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Password"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
              />
            </TextMargin>
            <TextMargin>
              <LoginInput
                id="standard-basic"
                label="Enter Mobile Number"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
              />
            </TextMargin>
            <LoginTerms>
              By continuing, you agree to Flipkart's
              <a> Terms of Use </a>
              and
              <a> Privacy Policy</a>
            </LoginTerms>
            <LoginButton onClick={() => signupUser()}>CONTINUE</LoginButton>
            <ExistingUser onClick={toggleSignup}>
              Existing User? Log in
            </ExistingUser>
          </Right>
        )}
      </Container>
    </Dialog>
  );
};

const Container = styled.div`
  min-width: 400px;
  min-height: 200px;
  max-height: 90vh;
  background: #fff;
  border-radius: 4px;
  margin: 0 auto;
  overflow: auto;

  display: flex;
  height: 528px;
`;

const Left = styled.div`
  background-image: url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png);
  background-position: center 85%;
  background-repeat: no-repeat;
  background-color: #2874f0;
  color: #fff;
  padding: 40px 33px;
  font-size: 15px;
  width: 40%;
  display: inline-block;
  vertical-align: top;

  span {
    font-size: 28px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    margin-top: 16px;
    line-height: 150%;
    color: #dbdbdb;
  }
`;

const Right = styled.div`
  width: 60%;
  display: inline-block;
  vertical-align: top;
  padding: 56px 35px 16px;
  position: relative;
  background-color: #fff;
`;

const TextMargin = styled.div`
  margin-bottom: 34px;
`;

const LoginInput = styled(TextField)`
  width: 100%;
`;

const LoginTerms = styled.div`
  color: #878787;
  font-size: 12px;
  font-weight: 400;

  a {
    color: #2874f0;
    text-decoration: none;
  }
`;

const LoginError = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #ff6161;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  margin-top: 16px;
  background: #fb641b;
  border: none;
  color: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  width: 100%;
  height: 48px;
  font-size: 15px;
  border-radius: 2px;
  padding: 10px 20px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  display: inline-block;
  transition: box-shadow 0.2s ease;
`;

const NewAccount = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  text-align: center;

  a {
    color: #2874f0;
    font-weight: 500;
    text-decoration: none;
  }
`;

const RequestOTP = styled.div`
  text-align: center;
  margin-top: 14px;

  a {
    font-size: 14px;
    color: #2874f0;
    text-decoration: none;
  }
`;

const ExistingUser = styled(LoginButton)`
  color: #2874f0;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

export default LoginDialog;
