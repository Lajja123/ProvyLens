import React, { useRef, useState } from "react";
import "../styles/deleteproduct.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ViewProduct() {
  return (
    <>
      <div className="availabel-proposal-main-div">
        <div className="delete-product-main-div">
          <FormControl
            sx={{ m: 1, minWidth: 70 }}
            size="small"
            id="dropdown-formcontrol"
            className="select-parent"
          >
            <InputLabel id="select-label-status">Product Id</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              // value={age}
              label="Product-Id"
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>1 </MenuItem>
              <MenuItem value={20}>2 </MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={toastInfo}
            variant="contained"
            size="large"
            className="delete-btn"
          >
            Delete
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
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
