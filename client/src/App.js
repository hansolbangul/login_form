import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './componentes/views/LandingPage/LandingPage';
import LoginPage from './componentes/views/LoginPage/LoginPage';
import RegisterPage from './componentes/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
