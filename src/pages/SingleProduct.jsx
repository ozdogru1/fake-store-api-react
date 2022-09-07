import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Recommended from "../components/recommended/Recommended";
import { CartContext } from "../context/cart-context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const location = useLocation();

  const { state } = location;

  const { dispatch } = useContext(CartContext);

  const addToCartHandler = (params) => {
    dispatch({ type: "ADD_TO_CART", payload: params });
    toast.success("product added to cart!");
  };
  return (
    <>
      <Box mt={5}>
        <Card
          sx={{
            height: "400px",
            padding: "30px",
            width: "60%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={state.image}
            alt={state.title}
            sx={{ height: "200px", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              {state.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {state.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Typography size="small">${state.price}</Typography>
            <Rating
              name="size-small"
              readOnly
              defaultValue={state.rating.rate}
              size="small"
            />
          </CardActions>
          <Button
            onClick={() => addToCartHandler(state)}
            sx={{ minWidth: "130px" }}
          >
            Add to Cart
          </Button>
        </Card>
        <ToastContainer />
      </Box>
      <Recommended elem={state} category={state.category} />
    </>
  );
};

export default SingleProduct;
