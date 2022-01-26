import './App.css';
import Registration from './components/Register';
import RegisterNew from './components/RegisterNew'
import {Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Order from './components/Order'

function App() {
  return (
    <div className="App">
    
   
        <Switch>
        <Route  exact path="/"> <Home /></Route>
        <Route  path='/register'><RegisterNew /></Route>
        <Route  path="/order"><Order /></Route>

        
        </Switch>
      
     
    </div>
  );
}
export default App;