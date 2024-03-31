import "./App.css";
import RRouter from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
