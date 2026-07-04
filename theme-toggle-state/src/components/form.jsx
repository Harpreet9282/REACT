import { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>

      <label>Age:</label>
      <input type="number" />
    </>
  );
}

export default Form;
