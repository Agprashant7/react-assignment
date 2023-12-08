import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import { COLORS } from "../../utils/theme";
import getProductDetailById from "../../utils/getProductDetailById";
import GetProductDetailById from "../../utils/getProductDetailById";
import { discountedPrice } from "./products";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, addToWishlist, removeItem } from "../../actions";
import QuantityInput from "../quantityInput";
const Cart = () => {
  const dispatch = useDispatch();
  const cartRedux = useSelector((state) => state.cart.cart);
  const wishlistRedux = useSelector((state) => state.wishlist.wishlist);
  const [cartItem, setCartItem] = useState(cartRedux);
  const [wishlist, SetWishlist] = useState(wishlistRedux);

  let navigate = useNavigate();
  let parsedCartItem = cartItem;

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
      previousValue + currentValue.qty * (currentValue.mrp - currentValue.price)
    );
  }, 0);

  let gst = (totalMrp * 2) / 100;
  let amountToPay = totalMrp - totalDiscount + gst;
  localStorage.setItem("total", amountToPay);

  const moveToWishlist = (e, id, size) => {
    let wishlistItem = { id: id, size: size };
    let checkIfItemExist = wishlist.filter((res, i) => res.id === id);
    if (checkIfItemExist.length > 0) {
      removeFromCart(e, id, size);
      return;
    }
    dispatch(addToWishlist(wishlistItem));
    // remove from cart
    removeFromCart(e, id, size);
  };

  const updateQuantity = (newValue, id, size) => {
    let concat = `${id}${size}`;
    let obj = cartItem.filter((res, i) => res.id + res.size === concat);
    obj[0].quantity = newValue;
    dispatch(removeItem(concat));
    dispatch(addItem(obj[0]));
  };

  const removeFromCart = (e, id, size) => {
    e.stopPropagation();
    let concat = `${id}${size}`;
    const filterCart = cartItem.filter(
      (res, i) => res.id + res.size !== concat
    );
    setCartItem(filterCart);
    dispatch(removeItem(concat));
  };
  return cartItem.length > 0 ? (
    <Container maxWidth={"md"}>
      <Box
        mt={10}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: 230,
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
                borderRadius: 2,
                //paddingBottom:10
              }}
              key={i}
              onClick={() => {
                navigate(`/products/${cart.id}`);
              }}
            >
              <Box sx={{ width: "30%" }}>
                <img
                  height={"100%"}
                  width={"100%"}
                  style={{ borderRadius: 8 }}
                  alt="product"
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
                <Typography variant="h5">
                  {GetProductDetailById(cart.id).name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography variant="h6" color={COLORS.secondary}>
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
                <Typography>Quantity:</Typography>
                <Box mt={1}>
                  <QuantityInput
                    defaultValue={cart.quantity}
                    onChange={(e, v) => {
                      e.stopPropagation();
                      updateQuantity(v, cart.id, cart.size);
                    }}
                  />
                </Box>

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
          <Typography variant="h6" color={COLORS.secondary}>
            &#8377;{amountToPay}
          </Typography>
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
