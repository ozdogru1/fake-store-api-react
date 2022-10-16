import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  console.log("version 2 branch is here ")
  return (
    <>
      <Stack
        direction="row"
        spacing={5}
        justifyContent="center"
        alignItems="center"
        sx={{ height: "60px", backgroundColor: "#f3e5f5"  }}
        
      >
        <Link to="/">
          <Typography variant="subtitle1">Home</Typography>
        </Link>
        <Link to="/products">
          <Typography variant="subtitle1">Products</Typography>
        </Link>
        <Link to="/cart">
          <Typography variant="subtitle1">Cart</Typography>
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
