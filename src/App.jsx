import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './component/Navbar/Navbar'

function App() {
  const [data, setData] = React.useState([])

  // use state
  React.useState(() => {

    // fetching data
    fetch('http://localhost:8000/api/user', {
      method : 'GET',
      mode : "cors"
    })
    .then(res => res.json())
    .then(dataApi => {
      setData(dataApi)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar />
      {/* {console.log(data)} */}

      {data.map((e) => {
        return (
          <ul key={e.id}>
            <li>{e.email}</li>
            <li>{e.password}</li>
            <li>{e.created_at}</li>
          </ul>
        )
      })}
    </div>
  );
}

export default App;
