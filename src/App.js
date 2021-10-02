import logo from "./logo.svg";
import "./App.css";
import Increment from "./components/Increment";
import ComponentWithProps from "./components/ComponentWithProps";
import SampleFormWithApi from "./components/SampleFormWithApi";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <FormComponent />
      <br />
      <Increment />
      <ComponentWithProps />
      <ComponentWithProps title="hey bro" />
      <br />
      <SampleFormWithApi />
    </div>
  );
}

export default App;
