import React from "react";

export const EventExamples = () => {
  const handleButtonClick = (e) => {
    console.log("handle button click");
    console.log(e);
  };
  const handleFormInput = (e) => {
    console.log("handle form input");
    console.log(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        <h2>hii form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          onChange={(e) => console.log(e.target.value)}
        />
        <button type="submit">clcik me ...</button>
        <button
          type="button"
          onClick={() => {
            console.log("hemlo");
          }}
        >
          click me
        </button>
      </form>
    </section>
  );
};
