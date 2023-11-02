import { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const totalAmount = () => {
      let price = 0,
        discount = 0;
      cartItems.forEach((item) => {
        price += item.product.price.mrp;
        discount += item.product.price.mrp - item.product.price.cost;
      });
      setPrice(price);
      setDiscount(discount);
    };

    totalAmount();
  }, [cartItems]);

  return (
    <Container1>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span">₹40</Price>
        </Typography>
        <TotalAmount>
          Total Amount
          <Price>₹{price - discount + 40}</Price>
        </TotalAmount>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Container1>
  );
};

const Container1 = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled(Box)`
  padding: 17px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  height: 100%;
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price = styled(Typography)`
  float: right;
`;

const TotalAmount = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  border-top: 1px dashed #e0e0e0;
  padding: 20px 0;
  border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
  font-size: 16px;
  color: green;
`;

export default TotalView;
