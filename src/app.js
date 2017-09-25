
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import IndexComponent from './scripts/components/IndexComponent'
import MusicComponent from './scripts/components/MusicComponent'
import MovieComponent from './scripts/components/MovieComponent'  
import HistoryComponent from './scripts/components/HistoryComponent' 
 

// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={IndexComponent}/>
            <Route path="/" component={IndexComponent}></Route>
            <Route path="/music" component={MusicComponent}></Route>
            <Route path="/movie" component={MovieComponent}></Route>
            <Route path="/history" component={HistoryComponent}></Route>
            <Route path="/*" component={IndexComponent}></Route>


        </Route>
    </Router>
    
    ,document.getElementById("app"))