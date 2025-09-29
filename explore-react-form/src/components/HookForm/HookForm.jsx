import React from "react";

import useInputField from "../../assets/Hooks/useinputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnChange} />
        <br />
        <input
          type="email"
          defaultValue={email}
          onChange={emailOnChange}
          name="email"
          id="email"
        />
        <br />
        <input
          type="password"
          onChange={passwordOnChange}
          name="password"
          id="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
