import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

const ItemCard = ({ image, cardName, cardPrice, onClick, size }) => {
  return (
    <Card
      sx={{
        bgcolor: "#435c70",
        width: { xs: 150, lg: 300 },
        height: { xs: 250, lg: 380 },
      }}
      onClick={onClick}
    >
      <CardMedia
        sx={{ height: { xs: 150, lg: 280 } }}
        image={image}
        title={cardName}
      />
      <CardContent>
        <Typography gutterBottom variant={{ xs: "body1", lg: "h6" }}>
          {cardName}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          &#8377;{cardPrice}
        </Typography>
        {size && (
          <Typography gutterBottom variant="subtitle2">
            Size:{size}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
