import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlelowClick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleChange = (event) => {
    console.log("On change worked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Email textarea
          </label>
          <input
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleChange}
            rows="8"
            cols="18"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
