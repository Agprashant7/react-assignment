import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ mt:2, display: "flex",color:'white', justifyContent: "space-around",bgcolor:'#567086' }}>
      <Box >footer</Box>
      <Box sx={{ display: "flex",gap:4 }}>
        <Box >
          <Typography variant="h6">Product</Typography>
          <Typography variant="body2">Pricing</Typography>
          <Typography variant="body2">FAQs</Typography>
          <Typography variant="body2">Policy</Typography>
        </Box>
        <Box>
        <Typography variant="h6">Company</Typography>
        <Typography variant="body2">About</Typography>
          <Typography variant="body2">Contact</Typography>
          <Typography variant="body2">Blog</Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
