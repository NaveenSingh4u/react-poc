import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Ameneties() {
  return (
    <div>
      {" "}
      <h2> Choose Ameneties </h2>
      <FormGroup>
        <div className="container flex">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Free Wi-Fi"
          />
          <FormControlLabel control={<Checkbox />} label="Minral Water" />
          <FormControlLabel control={<Checkbox />} label="A/C" />
          <FormControlLabel control={<Checkbox />} label="Locker" />
          <FormControlLabel control={<Checkbox />} label="TV" />
        </div>
      </FormGroup>
    </div>
  );
}
