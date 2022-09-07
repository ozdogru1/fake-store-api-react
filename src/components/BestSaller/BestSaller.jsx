import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loading from "../Loading/Loading";
import { Stack } from "@mui/system";
import { Box, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BestSaller = () => {
  const { data, loading } = useFetch("products?limit=3");
 

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: { xs: "flex", sm:"flex"},
        flexDirection: {xs:"column", sm: "column" },
        justifyContent: {xs:"center", sm: "center" },
        alignItems:{xs: "center",sm:"center"}
      }}
    >
      <Typography align="center" variant="h4" mt={4}>
        Best Saller Product
      </Typography>
      <Stack
        direction="row"
        gap={5}
        justifyContent="center"
        sx={{ flexWrap: "wrap", marginTop: "50px" }}
      >
        {loading ? (
          <Loading />
        ) : (
          data.map((item) => (
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
              {/* <Button>product detail</Button> */}
              <Button
                onClick={() => {
                  navigate(`products/${item.id}`, { state: item });
                }}
                variant="outlined"
              >
                Product Detail
              </Button>
            </Card>
          ))
        )}
      </Stack>
    </Box>
  );
};

export default BestSaller;
