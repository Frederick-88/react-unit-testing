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

  const isEmptyFormResult = () => {
    return !name;
  };

  return (
    <section>
      <label htmlFor="name">Your Name</label>
      <input
        data-testid="form-input"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="form-submit-button" onClick={changeName}>
        submit
      </button>

      <br />
      <p>The Line will show red if there is no any submitted form</p>
      <hr
        data-testid="form-line"
        style={{ borderColor: isEmptyFormResult() ? "red" : "lightgreen" }}
      />

      <h1
        className={isEmptyFormResult() ? "form-result--hidden" : ""}
        data-testid="form-result"
      >
        hello my name is {name ? name : ""}
      </h1>
    </section>
  );
}
