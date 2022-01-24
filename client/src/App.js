import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterNew from './components/RegisterNew';
import MiddleRight from './components/MiddleRight'; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<RegisterNew />}></Route>
          <Route path="/login" element={<MiddleRight />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;