import {useEffect, useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
    setCounter(counter => counter +1)},1000);
    return() => clearInterval(interval);},[]);

  return (
    <div className='ModeBtn'>
      <div>{counter}</div>
      <button>stop</button>
    </div>
  );
}

export default App;
