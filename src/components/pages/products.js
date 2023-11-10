import { Alert, Button, InputLabel, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { ProductsDetailsContext } from "../../App";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FaHeart, FaSmile } from "react-icons/fa";
import { COLORS } from "../../utils/theme";
import CustomModal from "../modal";
export const discountedPrice = (mrp, price) => {
  let calculate = mrp - price;
  calculate = calculate / mrp;
  calculate = calculate * 100;
  return calculate.toFixed(0);
};

const Products = () => {
  useEffect(() => {
    let ls = JSON.parse(localStorage.getItem("wishlist") || "[]");
    let isItemInWishlist = ls.filter((item, i) => item.id == id);
    SetWishlist(ls);
    if (isItemInWishlist.length > 0) {
      setWishlistButton(true);
    }
  }, []);
  const productDetails = useContext(ProductsDetailsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const getProductDetail = productDetails.filter((res, i) => res.id === id);
  const [newImage, setNewImage] = useState(0);
  const [itemSchema, setItemSchema] = useState({
    quantity: 1,
    size: "",
    id: id,
  });
  const cartLocalStorage = JSON.parse(localStorage.getItem("cartItem") || "[]");
  const [cart, setCart] = useState(cartLocalStorage);
  const wishlistLocalStorage = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

  const [wishlist, SetWishlist] = useState();
  const [validation, setValidation] = useState(false);
  const [wishlistButton, setWishlistButton] = useState(false);
  const [message, setMessage] = useState({
    itemExist: false,
    cartButton: false,
    wishlistButton: false,
  });
  const moveToWishlist = (id, size) => {
    let wishlistItem = { id: id, size: size };
    wishlist.push(wishlistItem);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWishlistButton(true);
  };
  const addToCart = () => {
    if (!itemSchema.size) {
      setValidation(true);
      return;
    }
    let checkForExisting = cart.filter(
      (res, i) => (res.id == itemSchema.id) & (itemSchema.size == res.size)
    );

    if (checkForExisting.length > 0) {
      setMessage({ itemExist: true });
      setTimeout(() => {
        setMessage({ itemExist: false });
      }, 8000);
      return;
    }
    cart.push(itemSchema);
    // setCart([...cart,itemSchema]);
    localStorage.setItem("cartItem", JSON.stringify(cart));
    setMessage({ cartButton: true });
  };

  return getProductDetail ? (
    <Box>
      <Grid container spacing={2}>
        <Grid mt={4} item xs={12} md={5}>
          <Box mt={4}>
            <img
              src={getProductDetail[0].image[newImage]}
              width={{ xs: 200, lg: 500 }}
              height={{ xs: 100, lg: 300 }}
            />
            <Box
              mt={2}
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {getProductDetail[0].image.map((image, i) => {
                return (
                  <img
                    src={image}
                    key={i}
                    width={50}
                    onClick={() => setNewImage(i)}
                  />
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item md={7} xs={12}>
          <Box mt={4} ml={{ xs: 6 }} sx={{ textAlign: "left" }}>
            <h1>{getProductDetail[0].name}</h1>
            <Typography>{getProductDetail[0].description}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography variant="h4">
                &#8377;{getProductDetail[0].price}
              </Typography>
              <Typography
                variant="caption"
                sx={{ textDecoration: "line-through" }}
              >
                {getProductDetail[0].mrp}
              </Typography>
              <Typography variant="subtitle2" color={COLORS.highLighter}>
                {`${discountedPrice(
                  getProductDetail[0].mrp,
                  getProductDetail[0].price
                )}% Off`}
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography variant="body1">Select Size</Typography>
              <Stack
                sx={{ borderColor: COLORS.secondary }}
                mt={2}
                direction="row"
                spacing={1}
              >
                {getProductDetail[0].sizes.map((res, i) => {
                  return (
                    <Chip
                      clickable={true}
                      sx={{
                        backgroundColor:
                          itemSchema.size == res
                            ? COLORS.secondary
                            : COLORS.fontColor,
                      }}
                      key={i}
                      label={res}
                      onClick={() => {
                        setItemSchema({ ...itemSchema, size: res });
                        setMessage({ itemExist: false });
                      }}
                      variant="outlined"
                    />
                  );
                })}
              </Stack>
              <Typography variant="captiontext"></Typography>
            </Box>
            <Box mt={2}>
              <InputLabel>Quantity </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Quantity"
                //onChange={handleChange}
                defaultValue={1}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </Box>
            <Box mt={2} sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <TextField
                id="standard-basic"
                label="Delivery Pin code"
                variant="outlined"
              />
              <Button variant="outlined" color="secondary">
                Check
              </Button>
            </Box>
            <Box mt={3} width={"40%"}>
              {message.itemExist && (
                <Alert severity="warning">
                  This item with {itemSchema.size} size already exist in your
                  cart
                </Alert>
              )}
              {message.cartButton && (
                <Alert severity="success">
                  Item successfully added to cart
                </Alert>
              )}
            </Box>

            <Box
              mb={4}
              mt={2}
              sx={{ display: "flex", flexDirection: "row", gap: 2 }}
            >
              <Button
                variant="contained"
                onClick={
                  message.cartButton ? () => navigate("/cart") : addToCart
                }
                color="secondary"
              >
                {message.cartButton ? "Go to cart" : "Add to cart"}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={
                  !wishlistButton
                    ? () =>
                        moveToWishlist(
                          id,
                          !itemSchema.size
                            ? getProductDetail[0].sizes[0]
                            : itemSchema.size
                        )
                    : () => navigate("/wishlist")
                }
                startIcon={wishlistButton ? <FaSmile /> : <FaHeart />}
              >
                {wishlistButton ? "Wishlisted" : "Add to wishlist"}
              </Button>
            </Box>

            <Box>
              <h3>Product Details</h3>
              <Typography variant="subtitle2">Material Care:</Typography>
              <Typography variant="body2">
                98% Cotton 2% Spandex Machine Wash
              </Typography>
              <Box mt={2}>
                <Typography variant="subtitle2">
                  Manufactured & Sold By:
                </Typography>
                <Typography variant="body2">
                  The Demo Store Pvt Ltd<br></br>
                  07,ABCD Road Bengaluru-560073<br></br>
                  demostore@gmail.com
                </Typography>
                <Box mt={2}>
                  <Typography variant="subtitle2">
                    Country Origin:India
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CustomModal
        open={validation}
        onClose={() => setValidation(!validation)}
        description={"Please select size"}
      />
    </Box>
  ) : (
    <></>
  );
};

export default Products;
