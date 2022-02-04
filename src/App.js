import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  // useState - Hooks - objects and arrays
  // useEffect - Hooks

  const [counter, setCounter] = useState(0);
  const [counterTotal, setCounterTotal] = useState(0);
  const [todoText, setTodoText] = useState('');
  const [list, setList] = useState([]);
  const [name, setName] = useState({});

  // {firstName: 'Jane', lastName: 'Doe'}
  // setName({...name, middleName: 'something'})

  // let counter = 0

  useEffect(() => {
    console.log('run this code when the page loads ONLY ONCE')
  }, [])

  useEffect(() => {
    console.log('Run this code anytime any of the states change in the component')
  })

  useEffect(() => {
    console.log('Run this code anytime the counter state variable changes')
    setCounterTotal(counter + counterTotal)
  }, [counter])

  const onButtonClick = () => {
    console.log('the button was clicked!')
    // counter = counter + 1
    // let newCounter = counter + 1
    // setCounter(newCounter)
    setCounter(counter + 1)
    // setCounterTotal(counter + counterTotal)
    // document.getElementById('counter-div-result').innerText = counter
  };

  const onInputChange = (event) => {
    console.log(event.currentTarget.value)
    setTodoText(event.currentTarget.value)

  };

  const submitItem = () => {
    // list.push(event.currentTarget.value) // Would mean that you are manipulating the list state variable directly.
    setList([...list, todoText])
    setTodoText('')
  };


  return (
      <>
        <div className="App">

          <button onClick={onButtonClick}>Click me</button>

          <h2 style={counter==6 ? {color: 'red'} : {color: 'green'}}>The counter value is {counter}</h2>
          <h2 className={counter==7 ? 'something-7': 'something'}>The counter value is {counter}</h2>

          <h2>The counter Total is: {counterTotal}</h2>

          {/*Ternary Operators / Conditionals*/}

          {(counter==5 || counter==10) && <h1>We are at 5 OR 10, yay!</h1>}

          {counter==5 && <h1>We are at 5, yay!</h1>}

          {counter==10 && <h1>We are at 10, yay!</h1>}

          <h1>The current list is: {JSON.stringify(list)}</h1>


          <input value={todoText} onChange={onInputChange} type="text"/>&nbsp;

          <button onClick={submitItem}>Submit</button>

          <div style={{marginTop: '20px'}}>
            <h1 style={{fontSize: '20px'}}>The List Items</h1>
            <ul>
              {list && list.map((listItem, idx) => {
                return <li key={idx}>{listItem}</li>
              })}
            </ul>

          </div>



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
