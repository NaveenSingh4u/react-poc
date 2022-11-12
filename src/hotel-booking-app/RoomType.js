import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RoomType() {
  return (
    <div>
      <h2>Select Room Type</h2>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="delux"
            control={<Radio />}
            label={
              <img
                alt="delux"
                src="/images/delux.jpg"
                className="img-delux"
                width="300px"
                height="200px"
                style={{ marginRight: "5px" }}
              />
            }
          >
          </FormControlLabel>
          <FormControlLabel
            value="suite"
            control={<Radio />}
            label={
              <img
                alt="delux"
                src="/images/suite.jpg"
                className="img-delux"
                width="300px"
                height="200px"
                style={{ marginRight: "5px" }}
              />
            }
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
