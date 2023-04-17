
import './App.css';
import React from 'react';

function App() {
const [drinksData, setDrinksData] = React.useState({})

React.useEffect(function() {
    fetch("https://api.up2tom.com/v3/models/58d3bcf97c6b1644db73ad12",{
        headers: {
          'Authorization': 'Token 9307bfd5fa011428ff198bb37547f979'
        }
    })
        .then(res => res.json())
        .then(data => setDrinksData(data))
}, [])




  return (
    <div className="App">
     <pre>{JSON.stringify(drinksData, null, 2)}</pre>
    </div>
  );
}

export default App;
