import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from "react";
import { DarkModeContext } from "../../context/dark-mode-context/DarkModeContext";
import { Stack } from "@mui/system";

 const TopNavbar = () => {
  const {theme,setTheme} = useContext(DarkModeContext)
  const themeChangeHandler = ()=>{
    setTheme(prev=> !prev)
  }
console.log(theme);
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "10px",
         color: "black",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "row", md: "row" },
        alignItems: "center",
      }}
    >
      <Stack direction="row">
       <GitHubIcon />
      <Typography sx={{marginLeft:"5px"}}> github/ozdogru1  </Typography>
      </Stack>
      <>

      <button onClick={themeChangeHandler} style={{border:"none", outline:"none", backgroundColor:"white",cursor:"pointer", color:"black"}}>
        {theme ? <LightModeIcon/> : <DarkModeIcon/>}
        </button>
      </>
    </Box>
  );
};

export default TopNavbar;
