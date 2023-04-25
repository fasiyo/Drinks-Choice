import React from "react";

export default function Gender(props){
    return (
<div>
    <h1>Gender</h1>
<input 
    type="radio"
     value="Male"
     name="gender"
     
 />
 <label htmlFor="male">Male</label>
 <input 
    type="radio"
     value="Female"
     name="gender"
 />
 <label htmlFor="female">Female</label>
 <h2>Please select the gender that corresponds to you </h2>
</div>

    )
}