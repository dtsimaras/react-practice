import './App.css';
import { useState } from 'react';
import Form from './component/form';
function App() {

  const [name, setName] = useState("")
  // const [array, setArray] = useState([4,5,6])
  // setArray(...array, 7)

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target[0].value
    setName(input)
    event.target[0].value = ""
  }

  const handleClick = () => {
    setName(name + '!')
  }

  return (
    <div className="App">
      <h1>Hello, {name}</h1>
        <Form handle={handleSubmit} name={name} />
        <button onClick={handleClick}>Ena Text</button>

    </div>
  );
}

export default App;
