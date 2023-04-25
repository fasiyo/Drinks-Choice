
import './App.css';
import React from 'react';
import Temperature from './Form Components/Temperature';
import Gender from './Form Components/Gender';

function App() {
const [drinksData, setDrinksData] = React.useState({})
const [result, setResult] = React.useState({})
const components =[
<Temperature/>,
<Gender/>,
<Age/>]
const [count,setcount]=React.useState(0)
function handleNext(){
  setcount(function(prevCount){
    return prevCount +1
  })
}

React.useEffect(function() {
    fetch("https://api.up2tom.com/v3/models/58d3bcf97c6b1644db73ad12",{
        headers: {
          'Authorization': 'Token 9307bfd5fa011428ff198bb37547f979'
        }
    })
        .then(res => res.json())
        .then(data => setDrinksData(data))
}, [])

const handleSubmit = () => {
  // make API call to get decision based on user input
  fetch('https://api.up2tom.com/v3/decision/58d3bcf97c6b1644db73ad12', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token 9307bfd5fa011428ff198bb37547f979'
    },
    body: JSON.stringify(form)
  })
  .then(response => response.json())
  .then(data => {
    // handle API response data here
    setResult(data);
  })
  .catch(error => {
    // handle API call error here
    console.error(error);
  });
}

const [form, setForm] = React.useState({
  "data": {
    "type": "scenario",
    "attributes": {
      "input": {
        INPUTVAR1: 20,
        INPUTVAR2:"Male",
        INPUTVAR3: "30",
        INPUTVAR4: "No",
        INPUTVAR5: "Morning",
        INPUTVAR6: "NA",
        INPUTVAR7: "Yes",
        INPUTVAR8: "5",
        INPUTVAR9: "3",
      }
    }
  }

});


 
 
  return (
    <div className="container">
      <div className="app">
        {components[count]}
      <button onClick = {handleSubmit}>press</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
     <pre>{JSON.stringify(drinksData, null, 2)}</pre>
     <button onClick={handleNext}>Next</button>
     </div>
    </div>
  );
}

export default App;
