import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  // useState - Hooks - objects and arrays
  // useEffect - Hooks

  const [counter, setCounter] = useState(0);

  // let counter = 0

  const onButtonClick = () => {
    console.log('the button was clicked!')
    // counter = counter + 1
    // let newCounter = counter + 1
    // setCounter(newCounter)
    setCounter(counter + 1)
    // document.getElementById('counter-div-result').innerText = counter
  };


  return (
      <>
        <div className="App">

          <button onClick={onButtonClick}>Click me</button>

          <h2 style={counter==6 ? {color: 'red'} : {color: 'green'}}>The counter value is {counter}</h2>
          <h2 className={counter==7 ? 'something-7': 'something'}>The counter value is {counter}</h2>

          {/*Ternary Operators / Conditionals*/}

          {(counter==5 || counter==10) && <h1>We are at 5 OR 10, yay!</h1>}

          {counter==5 && <h1>We are at 5, yay!</h1>}

          {counter==10 && <h1>We are at 10, yay!</h1>}



          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>*/}
          {/*    Edit <code>src/App.js</code> and save to reload.*/}
          {/*  </p>*/}
          {/*  <a*/}
          {/*      className="App-link"*/}
          {/*      href="https://reactjs.org"*/}
          {/*      target="_blank"*/}
          {/*      rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    Learn React*/}
          {/*  </a>*/}
          {/*</header>*/}
        </div>
      </>
  );
}

export default App;
