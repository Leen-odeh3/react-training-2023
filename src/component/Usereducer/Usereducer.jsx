import { useReducer } from "react";
import './Usereducer.scss'

const Usereducer = () => {
    const data = {
      name: "guest",
      age: 0,
      theme: "light"
    };
  
    const reducer = (state, action) => {
      switch (action.type) {
        case "Change Name":
          return { ...state, name: action.new };
        case "Change Age":
          return { ...state, age: action.new };
        case "ChangeTheme":
          return { ...state, theme: action.new };
        default:
          return state;
      }
    };
  
    const [all, dispatch] = useReducer(reducer, data);
    const color = all.theme === "light" ? "dark" : "light";
  
    return (
      <div className={`app ${all.theme}`}>
        <h1>My name is {all.name}</h1>
        <button onClick={() => { dispatch({ type: "Change Name", new: "leen" }) }}>Change name</button>
  
        <h1>My age is {all.age}</h1>
        <button onClick={() => { dispatch({ type: "Change Age", new: 22 }) }}>Change age</button>
        <br />
        <button onClick={() => { dispatch({ type: "ChangeTheme", new: color }) }}>Toggle Theme</button>
      </div>
    );
  }
  
  export default Usereducer;
  