import { Grid, styled } from "@mui/material";

const Container = styled(Grid)`
  margin: 0 10px;
  margin-bottom: 10px;
  background-color: red;
  height: 280px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

const MidSlide1 = () => {
  const url = [
    "https://img.freepik.com/premium-vector/women-s-bag-big-sale-banner_432372-67.jpg?w=1380",
  ];

  return (
    <Container>
      {url.map((image, index) => (
        <Image key={index} src={image} alt="" />
      ))}
    </Container>
  );
};

export default MidSlide1;
