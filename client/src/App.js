import './App.css';
import Registration from './components/Register';
import RegisterNew from './components/RegisterNew'
import {Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Homeji from './components/Homef';

function App() {
  return (
    <div className="App">
    
   
        <Switch>
        <Route  exact path="/"> <Home /></Route>
        <Route exact path='/register'><RegisterNew /></Route>
        <Route exact path="/homeji"><Homeji /></Route>

        
        </Switch>
      
     
    </div>
  );
}
export default App;