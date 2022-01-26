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
<<<<<<< HEAD
        <Route  exact path="/"> <Home /></Route>
        <Route  path='/register'><RegisterNew /></Route>
        <Route  path="/order"><Order /></Route>
=======
         <Route  exact path="/"> <Home /></Route>
         <Route exact path="/homeji"><Homeji /></Route>

>>>>>>> 88bfa6b872430bfc38f7450204f705d0c794c618

        
         </Switch>
      
     
    </div>
  );
}
export default App;