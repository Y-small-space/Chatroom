import RRouter from './Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
