import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context/CartContext";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recommended = ({ category, elem }) => {
  const { data, loading } = useFetch(`products/category/${category}?limit=4`);
  const filteredData = data.filter((item) => item.id !== elem.id);

  const { dispatch } = useContext(CartContext);

  const addToCartHandler = (params) => {
    dispatch({ type: "ADD_TO_CART", payload: params });
    toast.success("product added to cart!");
  };
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Typography sx={{ textAlign: "center", padding: "20px" }} variant="h4">
        Recommended Products
      </Typography>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={5}>
        {loading ? (
          <Loading />
        ) : (
          filteredData?.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="170"
                image={item.image}
                alt={item.title}
                sx={{ height: "270px", width: "250px", objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                  {item.title.substring(0, 19)}...
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Typography size="small">${item.price}</Typography>
                <Rating
                  name="size-small"
                  readOnly
                  defaultValue={item.rating.rate}
                  size="small"
                />
              </CardActions>
              <Button onClick={() => addToCartHandler(item)} variant="outlined">
                Add to Cart
              </Button>
            </Card>
          ))
        )}
        <ToastContainer />
      </Stack>
    </Box>
  );
};

export default Recommended;
