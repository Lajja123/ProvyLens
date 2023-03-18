import React, { useEffect, useState } from "react";
import "../styles/transfer.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function YourDaos() {
  const [allDataDaos, setDataDaos] = useState([]);

  return (
    <>
      <div className="transfer-main-div">
        <div className="all-datadao-main-div">
          <div className="first-row">
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
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value={10}>1 </MenuItem>
                <MenuItem value={20}>2 </MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
            <div className="product-details">
              <label className="manufacture-details-quality">
                Total Quality : KG
              </label>
              <label className="manufacture-details-quality">
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
              <InputLabel id="select-label-status">Manufacturer Id</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Status"
                // onChange={handleChange}
              >
                <MenuItem value={10}>1 </MenuItem>
                <MenuItem value={20}>2 </MenuItem>
                <MenuItem value={30}>3</MenuItem>
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
              <label className="manufacture-details-quality">Quality</label>
            </FormControl>
            <div className="manufacture-details">
              <label className="manufacture-details-quality">25%</label>
              <label className="manufacture-details-quality">50%</label>
              <label className="manufacture-details-quality">75%</label>
              <label className="manufacture-details-quality">100%</label>
            </div>
          </div>
        </div>
        <Button variant="contained" size="large" className="transfer-btn">
          Transfer
        </Button>
      </div>
    </>
  );
}
export default YourDaos;
