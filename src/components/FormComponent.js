import React, { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const changeName = (e) => {
    if (text) {
      setName(text);
    } else {
      setName("");
    }
  };

  return (
    <section>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={changeName}>submit</button>

      <h1 data-testid="form-result">hello my name is {name ? name : ""}</h1>
    </section>
  );
}
