import {
  TextField,
  Button,
} from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
export default function RequestForm() {

    const [title, setTitle] = useState("");

      const [amount, setAmount] = useState(0);
    
      const [description, setDescription] = useState("");
    
      const handleClick = (e) => {
        e.preventDefault();
        if (title === "" || amount === 0 || description === "") {
          alert("Enter valid transaction details...");
          return;
        }
    
        var oldItems = JSON.parse(localStorage.getItem("request")) || [];
    
        const newItems = {
          title: title,
          status: "pending",
          amount: amount,
          description: description,
        };
    
        oldItems.push(newItems);
    
        localStorage.setItem("request", JSON.stringify(oldItems));
    
        alert("Request sent successfully !!!")
    
      };

  return (
    <div className="App">
      {/* <Typography variant="h5">{title}</Typography> */}
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Blood Type"
          variant="outlined"
          onChange={(e)=>setTitle(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Amount"
          variant="outlined"
          onChange={(e)=>setAmount(e.target.value)}
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Desciption"
          variant="outlined"
          onChange={(e)=>setDescription(e.target.value)}
        />
        <br />
        <Button variant="contained" color="primary" onClick={(e) => handleClick(e)}>
          save
        </Button>
      </form>
    </div>
  );
}
