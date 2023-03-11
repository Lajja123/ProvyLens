import React, { useState, useEffect, useRef } from "react";
import "../styles/requeststock.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function DataDaoDetails({
  datadaos,
  setDatadaos,
  setSingleDataDao,
  setYourDaos,
  yourDaos,
  daoAddress,
}) {
  const inputRef = useRef();
  const inputRefEnd = useRef();
  const fileInputRef = useRef();
  const [showCreateProposal, setCreateProposal] = useState(false);
  const handleOpen2 = () => setCreateProposal(true);
  const handleClose2 = () => setCreateProposal(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,

    boxShadow: 24,
    p: 4,
  };
  const { ethereum } = window;

  const [dataDaoInfo, setDataDaoInfo] = useState([]);

  return (
    <>
      <div className="datadao-details-main-div">
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
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
        />
        <Button variant="contained" size="large">
          Request
        </Button>
      </div>
    </>
  );
}
export default DataDaoDetails;
