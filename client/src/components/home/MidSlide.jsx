import { Grid, styled } from "@mui/material";

const Container = styled(Grid)`
  margin: 0 10px;
  margin-bottom: 10px;
  height: 280px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MidSlide = (props) => {
  return (
    <Container>
      <Grid container lg={12} md={12} sm={12} xs={12}>
        {props.imageURL.map((image, index) => (
          <Grid key={index} item lg={4} md={4} sm={12} xs={12}>
            <img
              src={image}
              alt=""
              style={{ width: "100%", height: "280px", objectFit: "cover" }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MidSlide;
