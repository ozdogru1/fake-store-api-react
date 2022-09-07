import { Box } from "@mui/material";
import React from "react";
import BestSaller from "../components/BestSaller/BestSaller";
import Slide from "../components/Slider/Slide";

const Home = () => {
  return (
    <Box sx={{display:{xs:"flex", md:"block"}, flexDirection:{xs:"column"}, alignItems:{xs:"flex-end"}}}>
      <Slide />
      <BestSaller />
    </Box>
  );
};

export default Home;
