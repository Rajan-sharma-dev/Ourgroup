import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterNew from './components/RegisterNew';
import MiddleRight from './components/MiddleRight';
import Order from './components/Order';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
          <Route path="/register"><RegisterNew /></Route>
          <Route path="/logins"><MiddleRight /></Route>
          <Route path="/home" ><Home  /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;