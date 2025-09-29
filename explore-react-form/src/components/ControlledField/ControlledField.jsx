import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const handleNameOnChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailOnChange = (e) => {
    console.log(e.target);
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("password must be 6 charactersor longer ");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameOnChange}
          defaultValue={name}
          placeholder="Yor Name"
        />
        <br />
        <input
          type="email"
          name="name"
          id="name"
          placeholder="Email"
          onChange={handleEmailOnChange}
          defaultValue={email}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;

