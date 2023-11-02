import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { addItemToCart, payUsingPaytm } from "../../services/api";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";

const LeftDetails = (props) => {
  const { account } = useContext(DataContext);

  const handleAddItem = async () => {
    if (account) {
      const response = await addItemToCart({
        userId: account.userId,
        product: props.product,
        quantity: 1,
      });
      if (response.status === 200) {
        alert(response.data);
      }
    } else {
      alert("Please login first to add items to cart");
    }
  };

  const buyNow = async () => {};

  return (
    <Left>
      <Image src={props.product.detailUrl} />
      <StyledButton
        style={{ marginRight: 12, background: "#ff9f00" }}
        variant="contained"
        onClick={() => handleAddItem()}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        style={{ background: "#fb641b" }}
        onClick={() => buyNow()}
        variant="contained"
      >
        <Flash /> Buy Now
      </StyledButton>
    </Left>
  );
};

const Left = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "86%",
  marginBottom: "20px",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

export default LeftDetails;
