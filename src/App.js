import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [myData, setMyData] = useState();

  useEffect (() => {

    const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json();
    setMyData(data.results);
    };
    fetchData();
  }, []);

  console.log(myData);

  return (
    <div className="App">
      {myData &&
        myData.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.image} alt={data.name} />
              <p>{data.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
