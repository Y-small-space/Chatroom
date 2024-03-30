import RRouter from './Router';
import { HashRouter } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <RRouter />
      </div>
    </HashRouter>
  );
}

export default App;
