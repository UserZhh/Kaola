
require("./styles/app.scss")

///////////////////////
var React = require("react")
var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'
import RegisterComponent from './scripts/components/RegisterComponent'
import LoginComponent from './scripts/components/LoginComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import IndexComponent from './scripts/components/IndexComponent'
import MusicComponent from './scripts/components/MusicComponent'
import MovieComponent from './scripts/components/MovieComponent'  
import HistoryComponent from './scripts/components/HistoryComponent' 
import MoviesComponent from './scripts/components/MoviesComponent' 
import {Provider} from 'react-redux'
import store from './scripts/redux/store'

// {/* <IndexRedirect to="/main"/> */}

ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={IndexComponent}/>
            <Route path="/music" component={MusicComponent}></Route>
            <Route path="/movie" component={MovieComponent}></Route>
            <Route path="/history" component={HistoryComponent}></Route>
            <Route path="/index" component={IndexComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/register" component={RegisterComponent}></Route>
            <Route path="/movies" component={MoviesComponent}></Route>
            <Route path="/*" component={IndexComponent}></Route>

        </Route>
    </Router>
    </Provider>
    ,document.getElementById("app"))