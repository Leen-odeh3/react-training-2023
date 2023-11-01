import React, { useState } from "react";
import './Usestate.scss'
const Usestate = () => {
  const [name, setname] = useState("guest");
  const [age, setage] = useState(0);
  const [count, setcount] = useState(0);

const [theme ,settheme]=useState("light");
  return (
    <div className={`app ${theme}`}>
      <p> My name is {name}</p>
      <button onClick={() => setname("leen")}>change</button>
      <p> My age is {age}</p>
      <button onClick={() => setage(22)}>change</button>
      <div>
        <button onClick={() => setcount(count + 1)}> +</button>
        {count}
        <button onClick={() => setcount(count - 1)}> -</button>
      </div>

      <button onClick={()=>settheme('light')}>Light</button>
      <button onClick={()=>settheme('dark')}>Dark</button>
    </div>
  );
};

export default Usestate;
