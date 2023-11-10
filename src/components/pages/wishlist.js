import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCard from "../itemCard";
import GetProductDetailById from "../../utils/getProductDetailById";
import { useNavigate } from "react-router-dom";

const Whishlist = () => {
  let navigate = useNavigate();
  const wishlistLocalStorage = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

  const [wishlist, SetWishlist] = useState(wishlistLocalStorage);

  const addToCart = (id, size) => {
    let cartSchema = { quantity: 1, size: size, id: id };
    localStorage.removeItem("wishlist");
    let cartLocalStorage = JSON.parse(localStorage.getItem("cartItem") || "[]");

    cartLocalStorage.push(cartSchema);

    localStorage.setItem("cartItem", JSON.stringify(cartLocalStorage));
    //removing from wishlist ls
    removeFromWishlist(id);
  };

  const removeFromWishlist = (id) => {
    let wishlistLs = wishlist.filter((item, i) => item.id !== id);
    console.log(wishlistLs);

    SetWishlist(wishlistLs);

    localStorage.setItem("wishlist", JSON.stringify(wishlistLs));
  };

  const checkItemInCart = (id) => {
    let cartLocalStorage = JSON.parse(localStorage.getItem("cartItem") || "[]");
    let item = cartLocalStorage.filter((res, i) => res.id == id);
    console.log(item);
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
          justifyContent: "space-between",
          cursor:'pointer'
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
              <Button color="secondary" onClick={() => removeFromWishlist(item.id)}>
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
