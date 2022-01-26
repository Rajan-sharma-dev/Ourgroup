import './App.css';


import Registration from './components/Register';
import RegisterNew from './components/RegisterNew'
import {Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Order from './components/Order'



import { Route } from 'react-router-dom'
import Home from './components/Home'
import Homeji from './components/Homef';
import MainRegister from './components/Mainregister';
import Order from './components/Order';
import Store from './components/Store';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

        

      <Routes>
        <Route exact path="/" element={<Home />}> </Route>
        <Route exact path="/homeji" element={<Homeji />}>
        <Route exact path="/homeji/order" element={<Order />} />
        <Route exact path="/homeji/store" element={<Store />} />
        
        </Route>
        <Route exact path="/register" element={<MainRegister />}></Route>
      </Routes>






    </div>
  );
}
export default App;