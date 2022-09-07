import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Stack
      sx={{
        
        width: "100%",
        height: "220px",
         padding: "40px",
        marginTop: "30px",
        backgroundColor: "#e6e6e6",

       }}
      direction="row"
      justifyContent="space-evenly"
      gap={10}
    >
      <Box sx={{cursor:"pointer"}}>
        <Typography  variant="subtitle2">Contact Us</Typography>
        <Typography variant="subtitle2">About Us</Typography>
        <Typography variant="subtitle2">Directions</Typography>
        <Typography variant="subtitle2">Blog</Typography>
       </Box>
       <Box sx={{cursor:"pointer"}}>
        <Typography variant="subtitle2">Promotions</Typography>
        <Typography variant="subtitle2">Partners</Typography>
        <Typography variant="subtitle2">Careers</Typography>
        <Typography variant="subtitle2">FAQs</Typography>
       </Box>
      
      
    </Stack>
  );
};

export default Footer;
