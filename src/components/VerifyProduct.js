import React, { useRef, useState } from "react";
import "../styles/deleteproduct.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import feature1 from "../assets/feature-1.png";
import bubble4 from "../assets/fixed4.png";
import "../styles/viewproduct.css";
import { createClient } from "urql";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyProduct() {
  const [age, setAge] = useState("");
  const [smId, setSmId] = useState("");

  const verifyData = async (smId) => {
    const data_ = `query MyQuery {
      eventSupplierManufacturerTransfers(where: {_smId: "${smId}"}) {
        _dispatchTime
        _manufacturerAddress
        _smId
        _spId
        _supplierAddress
      }
    }`;

    const c = createClient({
      url: "https://api.studio.thegraph.com/query/40703/provylens-mumbai/v0.0.1",
    });

    const result1 = await c.query(data_).toPromise();
    // console.log(hexToString(result1.data.eventUserDatas[0]["_name"]));
    console.log(result1);
    const filteredData = result1.data.eventSupplierManufacturerTransfers.map(
      (product) => {
        return {
          dispatchTime: new Date(
            product["_dispatchTime"] * 1000
          ).toDateString(),
          manufacturerAddress: product["_manufacturerAddress"],
          smId: product["_smId"],
          spId: product["_spId"],
          supplierAddress: product["supplierAddress"],
        };
      }
    );

    console.log(filteredData);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const toastInfo = () =>
    toast.success("Product Deleted", {
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
      <div className="availabel-proposal-main-div">
        <div className="delete-product-main-div">
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Product Id"
            onChange={(e) => {
              setSmId(e.target.value);
            }}
          />

          <Button
            onClick={() => {
              verifyData(smId);
            }}
            variant="contained"
            size="large"
            className="verify-btn"
          >
            Verify Product
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

export default VerifyProduct;
