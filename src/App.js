import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => console.log(response.data)).catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <h1>AXIOS GET POST DELETE</h1>
    </div>
  );
}

export default App;
