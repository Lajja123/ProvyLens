import React, { useRef, useState } from "react";
import "../styles/deleteproduct.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../styles/createproposal.css";

function AvailabelProposal() {
  const inputRef1 = useRef();
  const inputRef3 = useRef();

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="availabel-proposal-main-div">
        <div>
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
          <Button variant="contained" size="large">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

export default AvailabelProposal;
