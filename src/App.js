import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//styles
import './css/App.css';

//context
import UserProvider from './context/UserProvider';

//components
import Login from './components/Login';
import Register from './components/Register';
import ChooseProtection from './components/ChooseProtection';

const App = () => {
    
    return (
        <main>
            <section className="row">                
                <UserProvider>
                    <Router>
                        <Switch>
                            <Route exact path="/tata-rt/">
                                <Login />
                            </Route>   
                            <Route exact path="/tata-rt/registro">
                                <Register />
                            </Route>    
                            <Route exact path="/tata-rt/elige-tu-proteccion">
                                <ChooseProtection />
                            </Route> 
                        </Switch>                                         
                    </Router>                    
                </UserProvider>                
            </section>
        </main>
    )
}

export default App;
