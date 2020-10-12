import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import page_one from './page-1';



export default class Routes extends Component {
    
    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path="/page_1" component={page_one} />
                    </Switch>
                </Router>
        )
    }
}