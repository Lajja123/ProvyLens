import React, { useRef, useState } from "react";
import "../styles/deleteproduct.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteProduct() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const notify = () => {
    alert("login success");
  };

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
            onClick={notify}
            variant="contained"
            size="large"
            className="delete-btn"
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

export default DeleteProduct;
