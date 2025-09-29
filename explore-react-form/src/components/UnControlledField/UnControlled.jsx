import React, { useRef } from "react";

const UnControlled = () => {
  const emailRef = useRef("");
  const passowordRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passowordRef.current.value;
    console.log(email,password)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="Email" />
        <br />
        <input ref={passowordRef} type="password" name="Pasword" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlled;
