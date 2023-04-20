import React from "react";

export default function Input2(props){
    return (
<div>
    <h1>Gender</h1>
<input 
    type="radio"
     id="male"
 />
 <label htmlFor="male">Male</label>
 <input 
    type="radio"
     id="Female"
 />
 <label htmlFor="female">Female</label>
 <h2>Please select the gender that corresponds to you </h2>
</div>

    )
}