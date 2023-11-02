import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Slide = (props) => {
  return (
    <Container>
      <Top>
        <p>{props.title}</p>
        <a href="">VIEW ALL</a>
      </Top>
      <Bottom>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
          containerClass="carousel-container"
          style={{ padding: "10px" }}
        >
          {props.products.map((product) => (
            <Link
              key={product.id}
              to={`product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box>
                <Image src={product.url} alt="" />
                <p>{product.title.shortTitle}</p>
                <p>{product.discount}</p>
                <p>{product.tagline}</p>
              </Box>
            </Link>
          ))}
        </Carousel>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 10px;
  margin-bottom: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 0 16px;
  border-bottom: 1px solid #eaeaea;

  p {
    color: #212121;
    font-size: 20px;
  }

  a {
    background: #2874f0;
    color: #fff;
    font-size: 13px;
    border-radius: 2px;
    padding: 10px 20px;
    box-shadow: 0 2px 4px 0 rgba(0 0 0 / 20%);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #1c5f9d;
    }
  }
`;

const Bottom = styled.div`
  padding: 20px 0;
`;

const Box = styled.div`
  text-align: center;

  p {
    font-size: 15px;
    padding-top: 8px;

    &:nth-child(2) {
      color: #212121;
    }

    &:nth-child(3) {
      color: green;
    }
    &:nth-child(4) {
      color: #212121;
    }
  }
`;

const Image = styled.img`
  width: auto;
  height: 150px;
`;

export default Slide;
