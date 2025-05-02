import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [testState, setTestState] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  function fetchDataFromBackend() {
    fetch(`http://localhost:8080/api/get-random-dish`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setFetchedData(data);
        testState === 'Yes' ? setTestState('No') : setTestState('Yes')
      })
      .catch(error => console.error("Error fetching data: ", error));
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={() => fetchDataFromBackend()}>Fetch data button</button>
      <p/>
      <div>{fetchedData}</div>
      <p/>
      <div>{testState}</div>
    </div>
  );
}

export default App;
