import React, { useEffect, useState } from "react";
import "../styles/transfer.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ContractFactory, ethers } from "ethers";
// import dataDaoFactory from "../contracts/artifacts/dataDaoFactory.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAccount, useSigner } from "wagmi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const dataDaoFactoryContract = "0x0caC8C986452628Ed38483bcEE0D1cF85816946D";

function YourDaos({ setSingleYourDataDao, setYourDaos, setDaoAddress }) {
  const [allDataDaos, setDataDaos] = useState([]);
  const { address, isConnected } = useAccount();

  // copy to clipboard function ***************
  const toastInfo = () => toast.success("Address Copied");
  const copyContent = async (e) => {
    try {
      await navigator.clipboard.writeText(e);
      toastInfo();
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div>
        <div className="all-datadao-main-div">
          <div className="first-row">
            <FormControl
              sx={{ m: 1, minWidth: 70 }}
              size="small"
              id="dropdown-formcontrol"
              className="select-parent"
            >
              <InputLabel id="select-label-status">Status</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Supplier </MenuItem>
                <MenuItem value={20}>Manufacturer </MenuItem>
                <MenuItem value={30}>Distributor</MenuItem>
              </Select>
            </FormControl>
            <div className="product-details">
              <label className="product-details-quality">
                Total Quality : KG
              </label>
              <label className="product-details-quality">
                Current Price : $
              </label>
            </div>
          </div>
          <div className="second-row">
            <FormControl
              sx={{ m: 1, minWidth: 70 }}
              size="small"
              id="dropdown-formcontrol"
              className="select-parent"
            >
              <InputLabel id="select-label-status">Status</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Supplier </MenuItem>
                <MenuItem value={20}>Manufacturer </MenuItem>
                <MenuItem value={30}>Distributor</MenuItem>
              </Select>
            </FormControl>
            <div className="manufacture-details">
              <label className="manufacture-details-quality">
                Manufacturer details
              </label>
              <label className="manufacture-details-quality">Name</label>
              <label className="manufacture-details-quality">Address</label>
              <label className="manufacture-details-quality">
                Other details
              </label>
            </div>
          </div>
          <div className="third-row">
            {" "}
            <FormControl
              sx={{ m: 1, minWidth: 70 }}
              size="small"
              id="dropdown-formcontrol"
              className="select-parent"
            >
              <InputLabel id="select-label-status">Status</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Supplier </MenuItem>
                <MenuItem value={20}>Manufacturer </MenuItem>
                <MenuItem value={30}>Distributor</MenuItem>
              </Select>
            </FormControl>
            <div className="manufacture-details">
              <label className="manufacture-details-quality">25%</label>
              <label className="manufacture-details-quality">50%</label>
              <label className="manufacture-details-quality">75%</label>
              <label className="manufacture-details-quality">100%</label>
            </div>
          </div>
        </div>
        <Button variant="contained" size="large">
          Transfer
        </Button>
      </div>
    </>
  );
}
export default YourDaos;
