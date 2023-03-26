import React, { useState, useEffect, useRef } from "react";
import "../styles/requeststock.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

function RequestStock() {
  const PK = "your_channel_address_secret_key"; // channel private key
  const Pkey = `0x${PK}`;
  const _signer = new ethers.Wallet(Pkey);
  const sendNotification = async () => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: _signer,
        type: 1, // broadcast
        identityType: 2, // direct payload
        notification: {
          title: `[SDK-TEST] notification TITLE:`,
          body: `[sdk-test] notification BODY`,
        },
        payload: {
          title: `[sdk-test] payload title`,
          body: `sample msg body`,
          cta: "",
          img: "",
        },
        channel: "eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681", // your channel address
        env: "staging",
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  const requeststock = async () => {
    await sendNotification();
    toastInfo();
  };
  const toastInfo = () =>
    toast.success("Request Successfully", {
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
        <Button
          onClick={() => {
            requeststock();
          }}
          variant="contained"
          size="large"
          className="request-btn"
        >
          Request
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
    </>
  );
}
export default RequestStock;
