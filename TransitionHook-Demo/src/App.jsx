import { useState, useTransition } from "react";

import "./App.css";
import NAMES from "./components/Data.json";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputvalue] = useState("");

  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    setInputvalue(e.target.value);
    startTransition(() => setQuery(e.target.value));
  };

  const filteredNames = NAMES.filter(
    (item) => item.first_name.includes(query) || item.last_name.includes(query)
  );
  return (
    <>
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <p> updasting list...</p>}
      {filteredNames.map((item) => {
        return (
          <div>
            {item.first_name} {item.last_name}
          </div>
        );
      })}
    </>
  );
}

export default App;
