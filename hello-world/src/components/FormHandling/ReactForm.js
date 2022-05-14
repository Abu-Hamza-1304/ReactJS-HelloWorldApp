import React, { useState } from "react";
import "./ReactForm.css";

function ReactForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // function to update state of name with value enter by user in form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // function to update state of age with value enter by user in form
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  // function to update state of email with value enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // function to update state of password with value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // function to update state of confirm password with value enter by user in form
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // below function will be called when user click on submit button
  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      // if 'password' and 'confirm password' does not match
      alert("password Not Match");
    } else {
      // display alert box with user 'name' and 'email' details
      alert(
        'A form was submitted with Name: "' +
          name +
          '" , Age: "' +
          age +
          '" and Email: "' +
          email +
          '"'
      );
      e.preventDefault();
    }
  };
  return (
    <div>
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3> Sign-Up Form </h3>
          <img src="form-icon.png" alt="" height="50px" width="50px" />
          <label>Name: </label> <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => handleNameChange(e)}
          />
          <br />
          <label>Age: </label> <br />
          <input
            type="text"
            value={age}
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
          <br />
          <label>Email: </label> <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          <label>Password: </label> <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <label>Confirm Password: </label> <br />
          <input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => {
              handleConfirmPasswordChange(e);
            }}
          />
          <br />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default ReactForm;
