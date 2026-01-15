import React from "react";

const App = () => {
  const input = (val) => {
    console.log(val);
  };

  return (
    <div>
      <h1>Hello, Nisarg</h1>
      <input
        onChange={(elem) => {
          input(elem.target.value);
        }}
      ></input>
    </div>
  );
};

export default App;
