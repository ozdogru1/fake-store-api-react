import React  from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
   Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import { CartContext } from "../context/cart-context/CartContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartSummary from "../components/CartSummary/CartSummary";

 const Cart = () => {
   const { cart, dispatch } = useContext(CartContext);
 
  const removeItemHandler = (params) => {
    dispatch({ type: "REMOVE_CART", payload: params.id });
  };
  
  const increaseQty = (params)=>{
    dispatch({type:"ADD_TO_CART", payload: params})
  }
  
  const decreaseQty = (params)=>{
    dispatch({type:"DECREASE_QTY", payload:params})
   }

   
    return (
    <Box sx={{display:{xs:"flex"}, alignItems:"center", justifyContent:"center"  }}>
      {cart.length === 0 ? "There are no products in your cart!" : 
      <Stack>
        {cart.map((item) => (
          <Card
            key={item.id}
            sx={{
              marginBottom:"20px",
              marginTop:"20px",
              height: "150px",
              display: "flex",
              width:"770px",
              padding:"20px",
              flexDirection: "row",
              alignItems: "center",
              
             }}
          >
            <CardMedia
              component="img"
              height="150"
              width="150"
              image={item.image}
              alt={item.title}
              sx={{width:"33%",objectFit:"contain"}}
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle2" sx={{width:"200px"}} component="div">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", width:"max-content" }}
                color="text.secondary"
              >
              </Typography>
            </CardContent>
            <CardActions
              sx={{ flexDirection: "column", justifyContent: "space-between", alignItems:"flex-start"}}
            >
              <Typography size="small">${item.price* item.qty}</Typography>
              <Stack direction="row" alignItems="center" sx={{marginRight:"10px", paddingTop:"10px"}}>

                <button style={{border:"none", outline:"none", backgroundColor:"white"}} disabled={item.qty<1}><AddIcon onClick={()=>increaseQty(item)}  sx={{marginRight:"5px", fontSize:"18px"}}/></button>
               <Typography>{item.qty} </Typography> 
               <button style={{border:"none", outline:"none", backgroundColor:"white"}} disabled={item.qty<2}><RemoveIcon   onClick={()=>decreaseQty(item)} sx={{marginLeft:"5px",fontSize:"18px" }}/> </button> 
                </Stack>             
             </CardActions>
            <Button
              onClick={() => removeItemHandler(item)}
              sx={{ minWidth: "130px", fontSize: "12px" }}
            >
              Remove Item
            </Button>
          </Card>
        ))}
         <CartSummary/>
      </Stack>
      }
      
     </Box>
  );
};

export default Cart;
