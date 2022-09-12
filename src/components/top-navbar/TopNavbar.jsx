import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Stack } from "@mui/system";

const TopNavbar = () => {
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
        <Typography sx={{ marginLeft: "5px" }}> github/ozdogru1 </Typography>
      </Stack>
    </Box>
  );
};

export default TopNavbar;
