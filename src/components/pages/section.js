import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ItemCard from "../itemCard";
import { useParams } from "react-router-dom";
import { ProductsDetailsContext } from "../../App";
import { useNavigate } from "react-router-dom";
const Section = () => {
  let navigate = useNavigate();
  let { name } = useParams();
  const productDetails = useContext(ProductsDetailsContext);
  useEffect(() => {
    let key = name;
    if (key !== "Latest") {
      let filterProductWithCategory = productDetails.filter(
        (item, i) => item.category === key || item.section === key
      );
      setProducts(filterProductWithCategory);
      return;
    }
    let filterLatest = productDetails.filter((item, i) => item.latest === "Y");
    setProducts(filterLatest);
  }, [name]);

  const [products, setProducts] = useState();
  const getSectionName = (name) => {
    if (name === "topwear") {
      return "Top Wear";
    } else if (name === "bottomwear") {
      return "Bottom Wear";
    } else if (name === "kids") {
      return "Kid";
    } else if (name === "men") {
      return "Men";
    } else if (name === "women") {
      return "Women";
    } else if (name === "women") {
      return "Women";
    } else {
      return name;
    }
  };

  return products ? (
    <Container maxWidth="lg">
      <Box mt={10}>
        <Box sx={{ TypographyAlign: "left" }}>
          {name !== "Latest" ? (
            <Typography>{`${getSectionName(name)}- ${
              products?.length
            } Items`}</Typography>
          ) : (
            <Typography variant="h5" >Latest Collections</Typography>
          )}
        </Box>

        <Box
        mt={5}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {products.map((res, i) => {
            return (
              <Box>
                <ItemCard
                  onClick={() => {
                    navigate(`/products/${res.id}`);
                  }}
                  cardPrice={res.price}
                  image={res.image[0]}
                  cardName={res.name}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  ) : (
    <h2>Loading......</h2>
  );
};

export default Section;
