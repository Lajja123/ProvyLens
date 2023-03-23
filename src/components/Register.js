import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, CardActions } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import "../styles/register.scss";
import Navbar from "./Navbar";
import { Input } from "@mui/material";
import { ethers } from "ethers";

import feature1 from "../assets/feature-1.png";
import bubble4 from "../assets/fixed4.png";
import { USERDETAILS_CONTRACT_ADDRESS_MUMBAI } from "../config";
import userdetails from "../artifacts/contracts/userDetails.sol/userDetails.json";

function Register() {
  const [userData, setUserData] = useState({
    userType: "",
    name: "",
    physcialAddress: "",
    profileImage: "",
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const registerUser = async () => {
    console.log("hello");
  };
  return (
    <>
      <div className="register-main-div">
        <div className="register-main">
          <h1 className="register-title">Register Here</h1>
          <FormControl
            sx={{ m: 1, minWidth: 70 }}
            size="small"
            id="dropdown-formcontrol"
            className="select-parent"
          >
            <InputLabel id="select-label-status">Select role</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              // value={age}
              label="Status"
              // onChange={handleChange}
              onChange={(e) => {
                setUserData({ ...userData, userType: e.target.value });
              }}
            >
              <MenuItem value={0}>Supplier </MenuItem>
              <MenuItem value={1}>Manufacturer </MenuItem>
              <MenuItem value={2}>Distributor</MenuItem>
            </Select>
          </FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              onChange={(e) => {
                setUserData({ ...userData, address: e.target.value });
              }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Input type="file" />
          </Box>
          <button className="register-btn" onClick={() => registerUser()}>
            Register
          </button>
        </div>
        <span className="shape1 header-shape">
          <img src={feature1}></img>
        </span>

        <span className="bubble3 header-shape">
          <img src={bubble4}></img>
        </span>
        <span className="bubble4 header-shape">
          <img src={bubble4}></img>
        </span>
      </div>
    </>
  );
}

export default Register;
