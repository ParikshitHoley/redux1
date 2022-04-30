import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply,divide } from "./Actions/index.jsx";
function App() {
  const myState = useSelector((state) => state.IncDec);
  // const handleChange = useSelector((state) => state.handleChange);
  const [inputValue, setInputValue] = React.useState(0)
  const handleChange = (e) => {
    setInputValue(e.target.value);
  } 
  console.log(inputValue);
  const dispatch = useDispatch();
  console.log(myState);
  return (
    <div className="App">
      <p>{myState.count}</p>
      <input type="number"  onChange={handleChange} />
      <br />
      <button onClick={() => dispatch(increment(1))}>Inc</button>
      <button onClick={() => dispatch(decrement(1))}>Dec</button>
      <button onClick={() => dispatch(increment(inputValue))}>Inc By X</button>
      <button onClick={() => dispatch(decrement(inputValue))}>Dec by X</button>
      <button onClick={() => dispatch(multiply(inputValue))}>Mul</button>
      <button onClick={() => dispatch(divide(inputValue))}>Div</button>
    </div>
  );
}

export default App;
