import React, { useState } from "react";

export const HookCounterFour = () => {
  const [item, setItem] = useState([]);
  const addItem = () => {
    setItem(...item, {
      id: item.length,
      value: Math.floor(Math.random() * 10 + 1),
    });
  };

  return (
    <div>
      <button onClick={addItem}>click here </button>
      <ul>
        {item.map((items) => (
          <li key={items.id}>{items.value}</li>
        ))}
      </ul>
    </div>
  );
};
