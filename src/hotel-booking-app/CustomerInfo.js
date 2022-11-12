import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

export default function CustomerInfo() {
  const [value, setValue] = React.useState(dayjs("2022-11-11"));
  const [noOfPerson, setnoOfPerson] = React.useState("1");
  const [noOfDays, setnoOfDays] = React.useState("1");

  const handlePersonChange = (event) => {
    setnoOfPerson(event.target.value);
  };

  const handleDayChange = (event) => {
    setnoOfDays(event.target.value);
  };

  return (
    <div className="container fluid">
      <div className="container flex m-2 p-2">
          <InputLabel id="demo-select-small">Number of person</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={noOfPerson}
            label="Number of person"
            onChange={handlePersonChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </div>
        <p></p>
        <div className="container flex m-2 p-2">
          <InputLabel id="demo-select-small">Number of days</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={noOfDays}
            label="Number of days"
            onChange={handleDayChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </div>
        <p></p>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <div className="container flex m-2 p-2">
          <TextField
            id="outlined-basic"
            label="Enter your Name here"
            variant="outlined"
          />
        </div>
        <p></p>
        <div className="container flex m-2 p-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
      </FormControl>
    </div>
  );
}
