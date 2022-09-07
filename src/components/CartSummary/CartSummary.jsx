import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context/CartContext";

const CartSummary = () => {
  const { cart } = useContext(CartContext);
  const itemPrice = cart.map((item) => item.price * item.qty);
  const shippingPrice = 13;
  const totalPrice = Math.floor(
    itemPrice.reduce((acc, val) => acc + val, 0) + shippingPrice
  );

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ border: "1px solid #ddd", padding: "20px" }}
    >
      <Typography>Total Item :{cart.length}</Typography>
      <Typography>Shipping : $13</Typography>
      <Typography>Total Price : ${totalPrice}</Typography>
    </Stack>
  );
};

export default CartSummary;
