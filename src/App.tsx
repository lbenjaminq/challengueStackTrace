import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';

function App() {
  return (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    );
}

export default App;
