import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Index from './components/Index.js';

function App() {
  return (
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  );
}

export default App;
