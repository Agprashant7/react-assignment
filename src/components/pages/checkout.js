import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  Typography,
} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaAngleUp } from "react-icons/fa";
import GetProductDetailById from "../../utils/getProductDetailById";
import CheckoutForm from "../form";
import { useNavigate } from "react-router-dom";
import CustomModal from "../modal";
import { COLORS } from "../../utils/theme";
import { useSelector,useDispatch } from "react-redux";
import { clearStore } from "../../actions";
const Checkout = () => {
  const cartRedux = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
  if(cartRedux.length<1){
    navigate('/')
  }
  },[])
  const navigate = useNavigate();
  const [cartItem, ] = useState(
   cartRedux
  );
  const [address, setAddress] = useState();
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleSubmit = (values) => {
    setAddress(values);
    setExpanded(false);
  };
  const placeOrder = () => {
    setShowModal(false);
    localStorage.clear();
    dispatch(clearStore());
    navigate("/");
  };
  return (
    <Container maxWidth="md">
      <Box mt={10}>
        <Typography variant="h3">Checkout</Typography>
      </Box>
      <Box
        mt={5}
        mb={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>No Of Items</Typography>
        </Box>
        <Box>
          <Typography>{cartItem.length}</Typography>
        </Box>
      </Box>
      <hr></hr>
      <Accordion  sx={{ bgcolor: COLORS.primary }}>
        <AccordionSummary
         
          expandIcon={<FaAngleUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Cart Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {cartItem.map((item, i) => {
            return (
              <Box mb={3}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor: COLORS.primary,
                  }}
                >
                  <Box>
                    <img
                      width={100}
                      src={GetProductDetailById(item.id).image[0]}
                    />
                  </Box>
                  <Box mr={5}>
                    <Typography>
                      {GetProductDetailById(item.id).name}
                    </Typography>
                    <Typography>
                      &#8377; {GetProductDetailById(item.id).price}
                    </Typography>
                    <Typography>Qty:{item.quantity}</Typography>
                  </Box>
                </Paper>
              </Box>
            );
          })}
          <Box mt={2}>
            <Typography variant="subtitle2">
              Total Amount To Pay:
              <Typography variant="h6">
                &#8377; {localStorage.getItem("total")}
              </Typography>
            </Typography>
            <Typography variant="caption">*Inc Discount and GST</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ bgcolor: COLORS.primary }}
        onChange={() => setExpanded(!expanded)}
        expanded={expanded}
      >
        <AccordionSummary
          expandIcon={<FaAngleUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Add Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckoutForm handleSubmit={handleSubmit} />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: COLORS.primary }} defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<FaAngleUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              required
              control={<Radio color="secondary" defaultChecked />}
              label="COD"
            />
            <FormControlLabel disabled control={<Radio />} label="UPI" />
            <FormControlLabel disabled control={<Radio />} label="Card" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Box mt={2}>
        <Button
          variant="contained"
          onClick={() => setShowModal(true)}
          disabled={address == undefined}
          color="secondary"
        >
          Place Order
        </Button>
      </Box>
      <CustomModal
        open={showModal}
        onClose={placeOrder}
        title={`Congrats,${address?.firstName}`}
        description={`  Your order has been successfully placed, for more updates keep checking ${address?.email}`}
      />
    </Container>
  );
};

export default Checkout;
