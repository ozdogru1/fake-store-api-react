import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const AllProduct = ({ filterData }) => {
  let { data, loading } = useFetch("products");

  if (filterData) {
    data = filterData;
  }

  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={5}
     >
      {loading ? (
        <Loading />
      ) : (
        data?.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{height:"270px",width:"250px", objectFit:"contain"}}
               image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="div">
              {item.title.substring(0,19)}...
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
            <Button
              sx={{alignItems:"center"}}
              onClick={() => {
                navigate(`${item.id}`, { state: item });
              }}
              variant="outlined"
            >
              Product Detail
            </Button>
          </Card>
        ))
      )}
    </Stack>
  );
};

export default AllProduct;
