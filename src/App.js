import './App.css';
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)
  const setStatePromise = (setState,value) => new Promise((resolve)=>setTimeout(()=>resolve(setState(value)),3000))
  const justLog = async() => setStatePromise(setCounter,10).then(()=>console.log('state updated.'))
  
  return (
    <div className="App">
      {counter}
      <button onClick={()=>justLog()}>Click Me</button>
    </div>
  );
}

export default App;
