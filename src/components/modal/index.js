import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../utils/theme";

const CustomModal = ({ open, onClose, title, description }) => {
  return (
    <Modal  open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography  id="modal-modal-title" variant="h6">
          <Typography color={COLORS.secondary} variant="h6" >
            {title}{" "}
          </Typography>
        </Typography>
        <Typography color={COLORS.secondary} id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border:'2px solid',
    borderColor:COLORS.secondary,
    boxShadow: 10,
    borderRadius:4,
    
    p: 4,
  };