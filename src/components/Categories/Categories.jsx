import React from "react";
import { Box, Typography } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch";

const Categories = ({ categorySelectHandler }) => {
  const { data, loading } = useFetch("products/categories");

  return (
    <Box
      sx={{
        width: "200px",
        borderRadius: "5px",
        marginRight:{md:"35px"},
        marginBottom:{xs:"35px"}
       }}
    >
      <Typography variant="h4" sx={{ marginBottom: "40px", }}>
        Categories
      </Typography>
      {loading ? (
        <Loading />
      ) : (
        data?.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderBottom: "1px solid #ddd",
              marginTop: "20px",
              display: {xs:"flex", md:"flex"},
              flexDirection: {xs:"row", md:"column"},
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography onClick={() => categorySelectHandler(item)}>
              {item}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Categories;
