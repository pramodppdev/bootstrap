import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PPNav from './components/nav';
import AccPP from './components/accordings';
import TablePP from './components/table';
import Home from './components/pages/home';
import SignIn from './components/form';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/nav" component={PPNav}></Route>
        <Route exact path="/acc" component={AccPP}></Route>
        <Route exact path="/tab" component={TablePP}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={SignIn}></Route>





        </Switch>
      </div>
    </Router>      
  );
}

export default App;
