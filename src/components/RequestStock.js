import React, { useState, useEffect, useRef } from "react";
import "../styles/requeststock.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function DataDaoDetails() {
  return (
    <>
      <div className="datadao-details-main-div">
        <FormControl
          sx={{ m: 1, minWidth: 70 }}
          size="small"
          id="dropdown-formcontrol"
          className="select-parent"
        >
          <InputLabel id="select-label-status">Product Name</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            // value={age}
            label="Status"
            // onChange={handleChange}
          >
            <MenuItem value={10}>abc </MenuItem>
            <MenuItem value={30}>xyz</MenuItem>
          </Select>
        </FormControl>
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Quality"
        />
        <Button variant="contained" size="large">
          Request
        </Button>
      </div>
    </>
  );
}
export default DataDaoDetails;
