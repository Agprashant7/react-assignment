import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Button,
  Container,
  Typography,
} from "@mui/material";
import { COLORS } from "../../utils/theme";
import getProductDetailById from "../../utils/getProductDetailById";
import GetProductDetailById from "../../utils/getProductDetailById";
import { discountedPrice } from "./products";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cartItem") || []
  );
  let navigate = useNavigate();

  let parsedCartItem = cartItem.length > 0 ? JSON.parse(cartItem) : [];

  let cartArrMrp = parsedCartItem.map((item, i) => {
    let mrp = getProductDetailById(item.id).mrp;
    let price = getProductDetailById(item.id).price;
    return { mrp: mrp, price: price, qty: item.quantity };
  });
  let totalMrp = cartArrMrp.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.qty * currentValue.mrp;
  }, 0);
  let totalDiscount = cartArrMrp.reduce(function (previousValue, currentValue) {
    return (
      previousValue + currentValue.qty * currentValue.mrp - currentValue.price
    );
  }, 0);
  let gst = (totalMrp * 5) / 100;
  let amountToPay = totalMrp - totalDiscount + gst;
  localStorage.setItem("total", amountToPay);
  const wishlistLocalStorage = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

  const [wishlist, SetWishlist] = useState(wishlistLocalStorage);

  const moveToWishlist = (e, id, size) => {
    let wishlistItem = { id: id, size: size };
    let checkIfItemExist = wishlist.filter((res, i) => res.id == id);
    if (checkIfItemExist.length>0) {
     
      removeFromCart(e, id, size);
      return;
    }

    wishlist.push(wishlistItem);

    
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    // remove from cart
    removeFromCart(e, id, size);
  };
  const removeFromCart = (e, id, size) => {
    e.stopPropagation();
    let concat = `${id}${size}`;
    const filterCart = JSON.parse(cartItem).filter(
      (res, i) => res.id + res.size != concat
    );
    setCartItem(JSON.stringify(filterCart));
    localStorage.setItem("cartItem", JSON.stringify(filterCart));
  };
  return cartItem.length > 3 ? (
    <Container maxWidth={"md"}>
      <Box
        mt={10}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: 200,
          },
        }}
      >
        {parsedCartItem.map((cart, i) => {
          return (
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                bgcolor: "#435c70",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate(`/products/${cart.id}`);
              }}
            >
              <Box sx={{ width: "30%" }}>
                <img
                  height={"100%"}
                  width={"100%"}
                  src={GetProductDetailById(cart.id).image}
                />
              </Box>
              <Box
                sx={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                mt={1}
              >
                <Typography>{GetProductDetailById(cart.id).name}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitle">
                    &#8377;{GetProductDetailById(cart.id).price}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {GetProductDetailById(cart.id).mrp}
                  </Typography>
                  <Typography variant="subtitle2" color={COLORS.highLighter}>
                    {`${discountedPrice(
                      GetProductDetailById(cart.id).mrp,
                      GetProductDetailById(cart.id).price
                    )}% Off`}
                  </Typography>
                </Box>
                <Typography>Size:{cart.size}</Typography>
                <Typography>Quantity:{cart.quantity}</Typography>
                <hr></hr>
                <Button
                  color="secondary"
                  onClick={(e) => removeFromCart(e, cart.id, cart.size)}
                >
                  Remove
                </Button>
                <Button
                  color="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveToWishlist(e, cart.id, cart.size);
                  }}
                >
                  Move to wishlist
                </Button>
              </Box>
            </Paper>
          );
        })}
      </Box>
      <Paper
        mb={2}
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          justifyContent: "space-around",
          bgcolor: "#435c70",
        }}
        elevation={3}
      >
        <Box>
          <Typography variant="subtitle2">Cart Total</Typography>
          <Typography variant="subtitle2">Discount</Typography>
          <Typography variant="subtitle2">GST</Typography>
          <Typography variant="subtitle2">Amount To Pay</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">&#8377;{totalMrp}</Typography>
          <Typography variant="subtitle2">- &#8377;{totalDiscount}</Typography>
          <Typography variant="subtitle2">+&#8377;{gst}</Typography>
          <Typography variant="subtitle2">&#8377;{amountToPay}</Typography>
        </Box>
      </Paper>
      <Box mt={2}>
        <Button
          color="secondary"
          onClick={() => navigate("/checkout")}
          variant="contained"
        >
          Checkout
        </Button>
      </Box>
    </Container>
  ) : (
    <Box mt={10}>
      <Typography
        variant="h2"
        color={"#f5a623"}
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Add Items To Cart{" "}
      </Typography>
    </Box>
  );
};

export default Cart;
