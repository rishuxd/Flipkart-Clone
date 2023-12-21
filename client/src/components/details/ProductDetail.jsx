import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, styled, Grid } from "@mui/material";
import LeftDetails from "./LeftDetails";
import RightDetail from "./RightDetail";
import { getProductById } from "../../services/api";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    console.log("hi");
    const fetchProducts = async () => {
      try {
        const { data } = await getProductById(id);
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log("Error while fetching product.", error);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) {
    return <Container1></Container1>;
  }

  return (
    <Container1>
      {product && Object.keys(product).length && (
        <Container2 container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <LeftDetails product={product} />
          </Grid>
          <Right item lg={8} md={8} sm={8} xs={12}>
            <RightDetail product={product} />
          </Right>
        </Container2>
      )}
    </Container1>
  );
};

const Container1 = styled(Box)`
  background-color: #f2f2f2;
  display: flex;
  flex-grow: 1;
`;

const Container2 = styled(Grid)`
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Right = styled(Grid)`
  margin-top: 40px;
`;
export default ProductDetail;
