import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div className="App">
      <h1>hellooo</h1>
      <h3>{process.env.REACT_APP_NAME}</h3>
      <h3>{process.env.REACT_APP_ENV}</h3>
    </div>
  );
}

export default App;
