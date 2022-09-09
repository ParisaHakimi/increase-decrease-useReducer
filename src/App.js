import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increament":
        return { count: state.count + 1 };
      case "decreament":
        return { count: state.count - 1 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "decreament" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increament" })}>+</button>
    </div>
  );
}

export default App;
