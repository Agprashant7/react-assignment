import React from "react";
import { useState, createContext, useContext } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { productDetails } from "../../utils/sampleData";
import { useNavigate } from "react-router-dom";
import { ProductsDetailsContext } from "../../App";
import ItemCard from "../itemCard";
export default function Home() {
  const productDetails = useContext(ProductsDetailsContext);
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  let navigate = useNavigate();
  const SectionDetails = ({ data }) => {
    return (
      <Box>
        <h2>{data[0].section}'s Section</h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "Center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {data.map((item, i) => {
            return (
              <ItemCard
                onClick={() => {
                  navigate(`/products/${item.id}`);
                }}
                image={item.image[0]}
                cardName={item.name}
                cardPrice={item.price}
              />
            );
          })}
        </Box>
      </Box>
    );
  };
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: "auto" }}>
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web_1_z75KGkf.jpg?format=webp&w=1500&dpr=1.0"
          width={"100%"}
          height={500}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs value={tabValue} onChange={handleChange}>
            <Tab label="Men" />
            <Tab label="Women" />
            <Tab label="Kids" />
          </Tabs>
        </Box>
        {tabValue === 0 && (
          <SectionDetails
            data={productDetails.filter(function (item, i) {
              return item.section === "Men";
            })}
          />
        )}
        {tabValue === 1 && (
          <SectionDetails
            data={productDetails.filter(function (item, i) {
              return item.section === "Women";
            })}
          />
        )}
        {tabValue === 2 && (
          <SectionDetails
            data={productDetails.filter(function (item, i) {
              return item.section === "Kids";
            })}
          />
        )}
      </Box>
      <Box>
        <h1>Latest Collections</h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "Center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_EHW23s8.jpg?format=webp&w=480&dpr=1.0" />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/jeans_Y0zDI8p.jpg?format=webp&w=480&dpr=1.0" />
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection_Tile_OS_POLOs_copy_FcA6U8H.jpg?format=webp&w=480&dpr=1.0" />
        </Box>
      </Box>
    </Container>
  );
}
