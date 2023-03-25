import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

function AddProduct() {
  const toastInfo = () =>
    toast.success("Product Added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="select-main" id="right-db-inside">
      <div className="product-details-main">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Product name"
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper product-dec"
            className="product-dec"
            label="Product description"
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Product price"
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Product unit"
          />
          <Button
            variant="contained"
            size="large"
            className="product-btn"
            onClick={toastInfo}
          >
            Add
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Box>
      </div>
    </div>
  );
}

export default AddProduct;
