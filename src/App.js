import './App.css';
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0)

  const simplePromise = (command) => new Promise((resolve)=> setTimeout(()=>resolve(command),3000))
  const justLogSimple = () => simplePromise(console.log('xxx')).then(()=>console.log('yyy'))

  const setStatePromise = (setState,value) => new Promise((resolve)=>setTimeout(()=>resolve(setState(value)),3000))
  const justLogState = async() => setStatePromise(setCounter,10).then(()=>console.log('state updated.'))

  return (
    <div className="App">
      {counter}
      <button onClick={()=>justLogSimple()}>Log Simple</button>
      <button onClick={()=>justLogState()}>Log State</button>
    </div>
  );
}

export default App;
