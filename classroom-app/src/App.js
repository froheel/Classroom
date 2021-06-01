import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ClassesPage from './pages/classes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path = "/signin" component={SignInPage} exact/>
        <Route path = "/signup" component = {SignUpPage} exact/>
        <Route path= "/classes" component ={ClassesPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
