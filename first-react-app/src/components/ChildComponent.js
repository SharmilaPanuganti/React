export const ChildComponent = ({ greetHandler }) => {
  return (
    <button
      onClick={() => {
        greetHandler("1234");
      }}
    >
      GreetParent
    </button>
  );
};
