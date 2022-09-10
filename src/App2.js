import { useReducer } from "react";
import "./App.css";

const App2 = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <button className="mines" onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
      <span>count: {state.count}</span>
      <button className="plus" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
    </div>
  );
};

export default App2;
