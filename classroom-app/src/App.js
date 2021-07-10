import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ClassesPage from './pages/classes';
import Joinclass from "./pages/Joinclass";
import Todolist from "./pages/Todolist";
import Createclass from "./pages/Createclass";
import InClass from "./husnain_components/InClass";
import Assignment from "./pages/Assignment";
import Logout from "./husnain_components/Logout";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/signin" component={SignInPage} exact/>
                <Route path="/signup" component={SignUpPage} exact/>
                <Route path="/classes" component={ClassesPage} exact/>
                <Route path="/inclass/:id" component={InClass} exact/>
                <Route path='/assignment' exact component={Assignment}/>
                <Route path='/Joinclass' exact component={Joinclass}/>
                <Route path='/Todolist' exact component={Todolist}/>
                <Route path='/Createclass' exact component={Createclass}/>
                <Route path='/logout' exact component={Logout}/>
            </Switch>
        </Router>
    );
}

export default App;
