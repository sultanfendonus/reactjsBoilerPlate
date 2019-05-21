import React from 'react';
import {Router, Route} from 'react-router-dom';
import HomePage from './HomePage'
import Header from './Header';
import history from '../history'

const App = ()=>{
    return(
        <Router history={history}>
        <div>
            <div className="container">
            
                <Header />
                <Route path='/' exact component ={HomePage} />

            
            </div>
        </div>
        </Router>
    )
}

export default App;