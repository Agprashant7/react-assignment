import { Button, Container, InputLabel, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
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
import { FaHeart } from "react-icons/fa";
import { COLORS } from "../../utils/theme";
export const discountedPrice = (mrp, price) => {
  let calculate = mrp - price;
  calculate = calculate / mrp;
  calculate = calculate * 100;
  return calculate.toFixed(0);
};
const Products = () => {
  const productDetails = useContext(ProductsDetailsContext);

  const { id } = useParams();
  const getProductDetail = productDetails.filter((res, i) => res.id === id);
  const [newImage, setNewImage] = useState(0);
  const [itemSchema, setItemSchema] = useState({
    quantity: 1,
    size: "",
    id: id,
  });
  const cartLocalStorage = JSON.parse(localStorage.getItem("cartItem") || "[]")
  const [cart, setCart] = useState(cartLocalStorage);
  console.log(cart);

  const addToCart = () => {
    console.log(itemSchema);
    if (!itemSchema.size) {
      return;
    }
   // console.log(cart)
    cart.push(itemSchema)
    // setCart([...cart,itemSchema]);
    localStorage.setItem('cartItem',JSON.stringify(cart))
      
  };
  return getProductDetail ? (
    <Box>
      <Grid container spacing={2}>
        {/* <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid> */}
        <Grid item xs={12} md={5}>
          {/* <Item>xs=4</Item> */}
          <Box mt={4}>
            <img src={getProductDetail[0].image[newImage]} width={500} />
            <Box
              mt={2}
              sx={{ display: "flex", gap: 2, justifyContent: "center" }}
            >
              {getProductDetail[0].image.map((image, i) => {
                return (
                  <img src={image} key={i} width={50} onClick={() => setNewImage(i)} />
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box mt={10} sx={{ textAlign: "left" }}>
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
              <Typography variant="h4">{getProductDetail[0].price}</Typography>
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
              <Typography variant="body1">Please Select Size</Typography>
              <Stack mt={2} direction="row" spacing={1}>
                {getProductDetail[0].sizes.map((res, i) => {
                  return (
                    <Chip
                    key={i}
                      label={res}
                      onClick={() =>
                        setItemSchema({ ...itemSchema, size: res })
                      }
                      variant="outlined"
                    />
                  );
                })}
              </Stack>
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
              <Button variant="outlined">Check</Button>
            </Box>
            <Box mt={2} sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Button
                variant="contained"
                onClick={addToCart}
                sx={{ bgcolor: COLORS.secondary }}
              >
                Add To Cart
              </Button>
              <Button variant="outlined" startIcon={<FaHeart />}>
                Add To Wishlist
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
    </Box>
  ) : (
    <></>
  );
};

export default Products;
