import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './componentes/views/LandingPage/LandingPage';
import LoginPage from './componentes/views/LoginPage/LoginPage';
import RegisterPage from './componentes/views/RegisterPage/RegisterPage';
import Community from './componentes/views/Community/Community';
import Auth from './hoc/auth';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                    <Route exact path="/Community" component={Community} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
