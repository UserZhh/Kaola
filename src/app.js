
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import IndexComponent from './scripts/components/IndexComponent'



// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={IndexComponent}/>
            <Route path="/index" component={IndexComponent}></Route>
            <Route path="/*" component={IndexComponent}></Route>


        </Route>
    </Router>
    
    ,document.getElementById("app"))