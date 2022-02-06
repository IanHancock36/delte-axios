import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData]= useState([])
  const [title, setTitle] = useState("")
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
       console.log("get data", response.data)
       setData(response.data)
     }).catch(error => console.log(error))
  }, [])

  const postData = (error)=> {
    error.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts',{title})
    .then(res => console.log("POSTING DATA",res))
    .catch(error => console.log(error))
  }
  // I like rendering the map then taking the variable name and applying it like below
  const arr = data.map((data , index )=> {
    return (
      <div>
      <div style ={{border: '1px solid black'}}>
        {data.id}
      </div>
      <div>{data.title}</div>
      </div>

    )
  })
  return (
    <div className="App">
      <h1>AXIOS GET POST DELETE</h1>
      <form>
        <div>
        
      <h1>Title</h1>
      <input type="text" value ={title} onChange={(e)=> setTitle(e.target.value)}/>

        <button title="SEND POST" onClick={postData}>send post</button>
        </div>
      </form>
      <div>{arr}</div>
    </div>
  );
}

export default App;
