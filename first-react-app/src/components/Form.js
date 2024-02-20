import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("male");
  const [selectedHob, setSelectedHob] = useState(["playing"]);

  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`welcome ${username} ${selectedHob} ${country}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">USERNAME</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="">hobbies</label>
          <input
            type="checkbox"
            value="reading"
            checked={selectedHob.indexOf("reading") != -1 ? true : false}
            // checked={selectedHob.includes("reading")}
            onChange={(e) => {
              e.target.checked
                ? setSelectedHob([...selectedHob, e.target.value])
                : setSelectedHob(
                    [...selectedHob].filter((i) => i != e.target.value)
                  );
            }}
          />
          read
          <input
            type="checkbox"
            value="playing"
            // checked={selectedHob.includes("reading")}
            checked={selectedHob.indexOf("playing") != -1 ? true : false}
            onChange={(e) => {
              e.target.checked
                ? setSelectedHob([...selectedHob, e.target.value])
                : setSelectedHob(
                    [...selectedHob].filter((i) => i != e.target.value)
                  );
            }}
          />
          play
        </div>

        <div>
          <label htmlFor="">slect countryy</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="0" hidden>
              ---select country ----
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
