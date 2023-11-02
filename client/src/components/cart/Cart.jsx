import { useEffect, useState, useContext } from "react";
import { Box, Typography, Button, Grid, styled } from "@mui/material";
import { getCartData, removeFromCart } from "../../services/api";
import TotalView from "./TotalView.jsx";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { DataContext } from "../../context/DataProvider";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { account } = useContext(DataContext);

  useEffect(() => {
    if (!account) {
      setCartItems([]);
    } else {
      const fetchCartData = async () => {
        try {
          const response = await getCartData(account.userId);
          setCartItems(response.data);
        } catch (error) {
          console.log("Error while fetching cart data", error);
        }
      };

      fetchCartData();
    }
  }, [account]);

  const removeItemFromCart = async (id) => {
    try {
      const response = await removeFromCart({
        userId: account.userId,
        productId: id,
      });
      if (response.status === 200) {
        const updatedCartItems = cartItems.filter(
          (item) => item.product.id !== id
        );
        setCartItems(updatedCartItems);
      }
    } catch (error) {
      console.log("Error while removing item from cart", error);
    }
  };

  const buyNow = async () => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    console.log("hi");
    const response = await fetch("http://localhost:8000/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <Container1>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem
                item={item.product}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
            <BottomWrapper>
              <StyledButton onClick={() => buyNow()} variant="contained">
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </Container1>
  );
};

const Container1 = styled(Box)`
  display: flex;
  flex-grow: 1;
`;

const Component = styled(Grid)(({ theme }) => ({
  maxWidth: "100rem",
  margin: "10px auto",
  height: "100%",

  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

export default Cart;
