import React from "react";
import "./calendar.css";
//Mui Components
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Inputs() {
  const [unit, setUnit] = React.useState("");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          margin: "auto",
          width: "60%",
          minWidth: 120,
          borderRadius: "16px",
        },
      }}
    >
      <Paper elevation={3} className="inputPaper">
        <TextField
          sx={{ m: 1, width: 120 }}
          id="outlined-number"
          label="Number"
          type="number"
        />

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Unit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={unit}
            label="Unit"
            onChange={handleChange}
          >
            <MenuItem value={10}>Sets</MenuItem>
            <MenuItem value={20}>Minutes</MenuItem>
            <MenuItem value={30}>Kilometeres</MenuItem>
            <MenuItem value={40}>Miles</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ m: 1, width: 120 }}
          id="outlined-basic"
          label="Exercise"
          variant="outlined"
        />
        <Fab
          aria-label="add"
          sx={{ m: 1, backgroundColor: "#44a340", color: "white" }}
        >
          <AddIcon />
        </Fab>
      </Paper>
    </Box>
  );
}

export default Inputs;
