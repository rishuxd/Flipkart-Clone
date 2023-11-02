import React from "react";
import {
  Box,
  TableBody,
  TableCell,
  Typography,
  styled,
  Table,
  TableRow,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Smalltext = styled(Box)`
  font-size: 14px;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const RightDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL1 =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 25 * 60 * 60 * 1000);

  return (
    <>
      <Typography style={{ fontSize: "25px" }}>
        {product.title.longTitle}
      </Typography>
      <Typography style={{ color: "#878787", fontSize: 14 }}>
        8 Ratings & 7 reviews
        <Box component="span">
          <img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.discount}
        </Box>
      </Typography>
      <Typography style={{ marginTop: "5px", fontSize: "20px" }}>
        Available Offers
      </Typography>
      <Smalltext>
        <Typography>
          <StyledBadge />
          Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders
          priced between ₹15,000 to ₹39,999T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders
          priced between ₹40,000 to ₹49,999T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on
          orders of ₹50,000 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C
        </Typography>
      </Smalltext>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <span style={{ color: "#2874f0" }}>SuperComNet</span>
              <Typography>GST invoice available</Typography>
              <Typography>View more sellers starting from ₹329</Typography>
            </TableCell>
          </ColumnText>
          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL1} style={{ width: 390 }} />
            </TableCell>
          </TableRow>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default RightDetail;
