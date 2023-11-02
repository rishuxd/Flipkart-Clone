import { useState, useEffect } from "react";
import { InputBase, List, ListItem, Box, styled } from "@mui/material";

import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  border-radius: 8px;
  max-width: 725px;
  width: 100%;
  background-color: #cfdefb;
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f0f5ff;
  }
`;

const SearchIconWrapper = styled(Box)`
  padding: 5px 15px;
  display: flex;
`;

const ListWrapper = styled(List)`
  box-sizing: border-box;
  max-width: 725px;
  width: 100%;
  position: absolute;
  color: #000;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  margin-top: 36px;
  border-radius: 0 0 8px 8px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: 17px;
  height: 40px;
  width: 100%;
`;

const ListItem1 = styled(ListItem)`
  font-size: 14px;
  &:hover {
    background-color: #f0f5ff;
  }
`;

const NoProductFound = styled(ListItem)`
  font-size: 14px;
  text-align: center;
`;

const Search = () => {
  const [text, setText] = useState();

  const getText = (text) => {
    setText(text);
  };

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <img src="/images/search-icon.svg" alt="" />
      </SearchIconWrapper>
      <InputSearchBase
        placeholder="Search for Products, Brands and More"
        inputProps={{
          style: {
            color: "black",
            opacity: "1",
          },
        }}
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem1>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setText("")}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem1>
            ))}
          {products.filter((product) =>
            product.title.longTitle.toLowerCase().includes(text.toLowerCase())
          ).length === 0 && <NoProductFound>No products found.</NoProductFound>}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
