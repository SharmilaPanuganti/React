const ClickHandler = () => {
  const ClickHandler = (event, (click = 1));
  {
    console("button clicked", event, click);
  }
  return (
    <div>
      <button onClick={ClickHandler}>click me</button>

      <button
        onClick={(event) => {
          ClickHandler(event, 5);
        }}
      ></button>
    </div>
  );
};
export default ClickHandler;
