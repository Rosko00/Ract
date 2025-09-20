import { useState } from "react";
function HelloWorld({ text }) {
  const [name, setName] = useState("Používateľ"); // Vytvorenie stavu name
  const handleNameChange = (event) => {
    // Obsluha onChange inputu
    setName(event.target.value);
  };

  return (
    <div>
      <h1>
        {text} {name}!
      </h1>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
}

export default HelloWorld;
