import React from "react";

export const Hero = ({ heroName }) => {
  if (heroName === "joker") throw new Error("not a hero but a great hero");
  return (
    <div>
      {" "}
      <h1>Hero {heroName}</h1>
    </div>
  );
};
