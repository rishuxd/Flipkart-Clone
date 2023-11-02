import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSlide1 from "./MidSlide1";
import { imageURL, imageURL1, imageURL2 } from "../../constants/data";
import { getProducts } from "../../services/api";
import { DataContext } from "../../context/DataProvider";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { setAccount } = useContext(DataContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log("Error while fetching product.", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <NavBar />
      <Banner />
      <Slide products={products} title="Top Offers" />
      <MidSlide imageURL={imageURL} />
      <Slide products={products} title="Todays's Fashion Deals" />
      <MidSlide1 />
      <MidSlide imageURL={imageURL2} />
      <Slide products={products} title="Bestsellers On Fashion" />
      <MidSlide imageURL={imageURL1} />
      <Slide products={products} title="Women's Day Specials" />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 10px;
  flex-grow: 1;
`;

export default Home;
