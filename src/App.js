import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello/Hello";
import { World } from "./components/World/World";

function App() {
  return (
    <div className="App">
      <Hello />
      <World />
    </div>
  );
}

export default App;
