import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [text, setText] = useState(false);
  const changeTextHandler = () => {
    setText(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!text && <Output>Good to see you!</Output>}
      {text && <Output>Bye Bye!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
