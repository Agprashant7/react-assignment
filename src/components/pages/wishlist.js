import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCard from "../itemCard";
import GetProductDetailById from "../../utils/getProductDetailById";
import { useNavigate } from "react-router-dom";

const Whishlist = () => {
  // useEffect(()=>)
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
    removeFromWishlist(id)
  };

  const removeFromWishlist = (id) => {
    let wishlistLs = wishlist.filter((item, i) => item.id !== id);
    console.log(wishlistLs);
   // wishlist.push(wishlistLs);
    SetWishlist(wishlistLs)
    //localStorage.setItem('wishlist',JSON.stringify(wishlistLs))
   
    localStorage.setItem("wishlist", JSON.stringify(wishlistLs));
  };
  return wishlist.length>0 ? (
    <Container maxWidth="lg">
      <Box
      mt={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
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
              <Button onClick={() => addToCart(item.id, item.size)}>
                Add To Cart
              </Button>
              <Button onClick={() => removeFromWishlist(item.id)}>
                Remove
              </Button>
            </Box>
          );
        })}
      </Box>
    </Container>
  ) : (
    <Box mt={10}>
   <Typography variant="h2" color={'#f5a623'} style={{textDecoration:'underline',cursor:'pointer'}} onClick={()=>navigate('/')}>Add Items To Wishlist </Typography>
    </Box>
 
  );
};
export default Whishlist;
