import React from 'react'
import './Form.css'
import { useState } from 'react';
import Navbar from './Navbar';
function RequestForm() {

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
    <>
      <Navbar/>
      <div className='login'>
        <form className="login-form">
          <h2>Request Blood</h2>
          <select placeholder='Blood Type' onChange={(e)=>(setTitle(e.target.value))}>
            <option value="" selected>Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <input
            type='number'
            placeholder='Amount'
            onChange={(e)=>(setAmount(e.target.value))}
            name='number'
          />
          <input
            type='text'
            placeholder='Description'
            onChange={(e)=>(setDescription(e.target.value))}
            name='lname'
          />
          <div className='login-footer'>
            <button className='login-btn' onClick={handleClick}>Request</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RequestForm
