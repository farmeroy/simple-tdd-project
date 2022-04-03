import { useState } from 'react'

const Greeting = () => {
  
  const [text, setText] = useState(false);
  const changeTextHandler = () => {
    setText(true)
  }
  
  return (
    <div>
      <h2>Hello World</h2>
      {!text && <p>Good to see you!</p> }
      {text && <p>Bye Bye!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
