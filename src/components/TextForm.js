import React, { useState } from "react";

export default function TextForm(props) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

  const handleClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Enter the text", "Warning");
    } else {
      props.showAlert("Converted to Uppercase", "Success");
    }
  };

  const handlelowClick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    if (text === "") {
      props.showAlert("Enter the text", "Warning");
    } else {
      props.showAlert("Converted to lowercase", "Success");
    }
  };

  const handleclearClick = () => {
    console.log("Clear Text was clicked");
    let newText = "";
    setText(newText);
  };

  const findEmailID = () => {
    console.log("Find EmailID was clicked");
    let email = text.match(emailRegex);
    console.log(email.join(","));
    setEmail(email.join(", "));
  };

  const handleChange = (event) => {
    console.log("On change worked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const [email, setEmail] = useState("No EmailID Found");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="form-label"></label> */}
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleChange}
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleclearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={findEmailID}>
          Find EmailId
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
      <div className="container my-2">
        <h1>Email Id in the paragraph:</h1>
        <p>{email}</p>
      </div>
    </>
  );
}
