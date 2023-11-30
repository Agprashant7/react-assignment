import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCard from "../itemCard";
import GetProductDetailById from "../../utils/getProductDetailById";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeFromWishlist } from "../../actions";
const Whishlist = () => {
  const dispatch = useDispatch();
  const cartRedux = useSelector((state) => state.cart.cart);
  const wishlistRedux = useSelector((state) => state.wishlist.wishlist);
  let navigate = useNavigate();
  const [wishlist, SetWishlist] = useState(wishlistRedux);
  const [load, setLoad] = useState();
  const [cartItem, setCartItem] = useState(cartRedux);
  useEffect(() => {
    setCartItem(cartRedux);
    SetWishlist(wishlistRedux);
  }, [load]);

  const addToCart = (id, size) => {
    let cartSchema = { quantity: 1, size: size, id: id };
    dispatch(addItem(cartSchema));
    //removing from wishlist ls
    removeItemFromWishlist(id);
    setLoad(true);
  };

  const removeItemFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
    setLoad(true);
  };

  const checkItemInCart = (id) => {
    let item = cartItem.filter((res, i) => res.id === id);
    if (item.length > 0) {
      return true;
    }
    return false;
  };
  return wishlist.length > 0 ? (
    <Container maxWidth="lg">
      <Box
        mt={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          cursor: "pointer",
        }}
      >
        {wishlist.map((item, i) => {
          return (
            <Box>
              <ItemCard
                onClick={() => {
                  navigate(`/products/${item.id}`);
                }}
                key={i}
                cardPrice={GetProductDetailById(item.id).price}
                cardName={GetProductDetailById(item.id).name}
                image={GetProductDetailById(item.id).image[0]}
                size={item.size}
              />
              <Button
                color="secondary"
                disabled={checkItemInCart(item.id)}
                onClick={() => addToCart(item.id, item.size)}
              >
                {checkItemInCart(item.id) ? "Already In Cart" : "Add TO Cart"}
              </Button>
              <Button
                color="secondary"
                onClick={() => removeItemFromWishlist(item.id)}
              >
                Remove
              </Button>
            </Box>
          );
        })}
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
        Add Items To Wishlist{" "}
      </Typography>
    </Box>
  );
};
export default Whishlist;
