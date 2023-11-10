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
    let filterProductWithCategory = productDetails.filter(
      (item, i) => item.category == key || item.section == key
    );
    console.log(name);
    console.log(filterProductWithCategory);
    setProducts(filterProductWithCategory);
  }, [name]);

  const [products, setProducts] = useState();
  const getSectionName = (name) => {
    if (name == "topwear") {
      return "Top Wear";
    } else if (name == "bottomwear") {
      return "Bottom Wear";
    } else if (name == "kids") {
      return "Kid";
    } else if (name == "mens") {
      return "Men";
    } else if (name == "women") {
      return "Women";
    } else if (name == "women") {
      return "Women";
    } else {
      return name;
    }
  };

  return products ? (
    <Container maxWidth="lg">
      <Box mt={10}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6">{`${getSectionName(name)} - ${
            products.length
          } items`}</Typography>
        </Box>

        <Box
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
