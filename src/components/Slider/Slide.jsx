import { Stack } from "@mui/system";
import React from "react";
import "./slide.css";
import { img } from "../../constant/constant";
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
 const Slide = () => {
  const navigate = useNavigate()

  const directToProduct = ()=>{
    navigate("/products")
  }
  return (
    <Box >
      <SimpleImageSlider
        width={1450}
        height={600}
        images={img}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={0.9}
        autoPlayDelay={1.5}
        bgColor={"#000"}
        style={{marginTop:"20px", cursor:"pointer"}}
        onClick={directToProduct}
       />
      </Box>
  );
};

export default Slide;
