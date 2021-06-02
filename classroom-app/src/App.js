import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ClassesPage from './pages/classes';
import Joinclass from "./pages/Joinclass";
import Todolist from "./pages/Todolist";
import Createclass from "./pages/Createclass";
import Sidebar from "./components/Sidebar/Sidebar";
import InClass from "./husnain_components/InClass";
import Assignment from "./pages/Assignment";


function App() {
    return (
        <Router>
            <Sidebar/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/signin" component={SignInPage} exact/>
                <Route path="/signup" component={SignUpPage} exact/>
                <Route path="/classes" component={ClassesPage} exact/>
                <Route path="/inclass" component={InClass} exact/>
                <Route path='/assignment' exact component={Assignment}/>
                <Route path='/Joinclass' exact component={Joinclass}/>
                <Route path='/Todolist' exact component={Todolist}/>
                <Route path='/Createclass' exact component={Createclass}/>

            </Switch>
        </Router>
    );
}

export default App;
