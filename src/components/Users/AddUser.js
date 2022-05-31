import React, { useState } from "react";

const AddUser = () => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <input
        id="username"
        type="text"
        value={enteredUsername}
        onChange={usernameChangeHandler}
      />
      <input
        id="username"
        type="text"
        value={enteredAge}
        onChange={ageChangeHandler}
      />
      <button type="submit">Add User</button>
    </div>
  );
};

export default AddUser;
