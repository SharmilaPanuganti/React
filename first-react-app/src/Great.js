function Great({ name, comp, children }) {
  // console.log(props);
  // const { name, comp, children } = props;
  return (
    <div>
      <h1>
        greetings from {name} {comp}
        {children}
      </h1>
    </div>
  );
}

export default Great;
