import styled from "styled-components";
import { navData } from "../../constants/data";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  padding: 10px;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  color: #212121;
  overflow-x: auto;
  white-space: nowrap;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari and Opera */
  }
`;

const Box1 = styled.div`
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;

  img {
    height: 64px;
    width: 64px;
    margin-bottom: 4px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.8;
  }

  &:hover {
    p {
      color: #2874f0;
    }
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavContainer>
        {navData.map((data, index) => (
          <Box1 key={index}>
            <img src={data.url} alt="" />
            <p>{data.text}</p>
          </Box1>
        ))}
      </NavContainer>
    </Container>
  );
};

export default NavBar;
