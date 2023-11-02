import { styled } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import Mail from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Container>
      <Links>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
          <LinkedIn />
        </a>
        <a href="https://www.twitter.com/yourhandle" target="_blank">
          <Twitter />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank">
          <Mail />
        </a>
      </Links>
      <p>&copy; Built by Jyotiswaroop Srivastav.</p>
    </Container>
  );
};

const Container = styled("div")`
  background-color: #172337;
  padding: 30px;
  display: flex;
  align-items: center;
  color: #fff;

  flex-direction: column;

  p {
    font-size: 14px;
    margin-top: 5px;
    opacity: 0.8;
  }
`;

const Links = styled("div")`
  display: flex;
  align-items: center;

  a {
    margin: 0 10px;
    color: #2874f0;
    tansition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Footer;
