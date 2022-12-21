import "./App.css";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, inputClasses, Select } from "@mui/material";

import {InputLabel} from '@mui/material';
import {MenuItem} from '@mui/material';
import {FormControl} from '@mui/material';



function App() {
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [operation, setOperation] = useState();
  const [ans, setAns] = useState();
  

  const calSum = (e) => {
   
   if(operation === "+")
   {
    let ans=parseInt(numberOne)+parseInt(numberTwo);
    setAns(parseInt(ans))
   }
   if(operation === "-")
   {
    let ans=parseInt(numberOne)-parseInt(numberTwo);
    setAns(parseInt(ans))
   }
   if(operation === "*")
   {
    let ans=parseInt(numberOne)*parseInt(numberTwo);
    setAns(parseInt(ans))
   }
   if(operation === "/")
   {
    let ans=parseInt(numberOne)/parseInt(numberTwo);
    setAns(parseInt(ans))
   }
  

  }
  const handleChange = (e) => {
    setOperation(e.target.value);
  }
  const handleClick = (e) => {
    setAns(0)
   }


  return (
   
    <div className="App">
      <div className="header">
        <h1> Calculator </h1>
      </div>
      <form onSubmit={calSum}>
      <div className="textbox">
      <TextField fullWidth margin = "dense" id = "outlined-basic" type = "number" label="Number One"  onChange={(e) => {setNumberOne(e.target.value);}} value={numberOne} variant="outlined" />
      <TextField fullWidth margin = "dense" id="outlined-basic" type = "number" label="Number Two" onChange={(e) => {setNumberTwo(e.target.value);}} value={numberTwo} variant="outlined" />
      <FormControl fullWidth>
        <InputLabel >Operation</InputLabel>
        <Select
          value={inputClasses.operation}
          label="operation"
          onChange={handleChange}
        >
          <MenuItem value={"+"}>Add</MenuItem>
          <MenuItem value={"-"}>Sub</MenuItem>
          <MenuItem value={"*"}>Multiplication</MenuItem>
          <MenuItem value={"/"}>Division</MenuItem>
        </Select>
      </FormControl>
 
      </div>
      <div className="header">
      <Button type="submit" variant="contained" onClick={handleClick}>calculate</Button>
      <h3 className="ANS">{numberOne}{operation}{numberTwo} is {ans}</h3>
      </div>
      </form>
      
    </div>
 
    
  );
};

export default App;
