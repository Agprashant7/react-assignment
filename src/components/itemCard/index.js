import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

const ItemCard = ({ image, cardName, cardPrice, onClick, size }) => {
  return (
    <Card sx={{ width: 300 }} onClick={onClick}>
      <CardMedia sx={{ height: 280 }} image={image} title={cardName} />
      <CardContent>
        <Typography gutterBottom variant="body2">
          {cardName}
        </Typography>
        <Typography gutterBottom variant="body2">
          {cardPrice}
        </Typography>
        {size && (
          <Typography gutterBottom variant="body2">
            Size:{size}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
