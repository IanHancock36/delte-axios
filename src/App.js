import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData]= useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
       console.log("get data", response.data)
       setData(response.data)
     }).catch(error => console.log(error))
  }, [])
  const arr = data.map((data , index )=> {
    return (
      <div>
      <div>
        {data.id}
      </div>
      <div>{data.title}</div>
      </div>

    )
  })
  return (
    <div className="App">
      <h1>AXIOS GET POST DELETE</h1>
   
      <div>{arr}</div>
    </div>
  );
}

export default App;
