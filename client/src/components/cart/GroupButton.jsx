import React, { useState } from "react";
import { addItemToCart } from "../../services/api";
import { ButtonGroup, Button, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const GroupedButton = (props) => {
  const [counter, setCounter] = useState(props.item.quantity);
  const { account } = useContext(DataContext);

  const handleIncrement = async () => {
    if (account) {
      const response = await addItemToCart({
        userId: account.userId,
        product: props.item,
        quantity: 1,
      });
      if (response.status === 200) {
        setCounter((counter) => counter + 1);
      }
    } else {
      alert("Item cannot be added to cart");
    }
  };

  const handleDecrement = async () => {
    if (account) {
      const response = await addItemToCart({
        userId: account.userId,
        product: props.item,
        quantity: -1,
      });
      if (response.status === 200) {
        setCounter((counter) => counter - 1);
      }
    } else {
      alert("Item quantity can't be decreased");
    }
  };

  return (
    <Component>
      <StyledButton onClick={() => handleDecrement()} disabled={counter === 1}>
        -
      </StyledButton>
      <Button disabled>{counter}</Button>
      <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
    </Component>
  );
};

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

export default GroupedButton;
