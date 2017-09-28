
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
import History from './scripts/components/History'
import Classic from './scripts/components/Classic'
import Funny from './scripts/components/Funny'
import MovieUPComponent from './scripts/components/MovieUPComponent' 
import HistoryUPComponent from './scripts/components/HistoryUPComponent' 
import MusicUPComponent from './scripts/components/MusicUPComponent'
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
            <Route path="/historys" component={History}></Route>
            <Route path="/classic" component={Classic}></Route>
            <Route path="/funny" component={Funny}></Route>
            <Route path="/movieup" component={MovieUPComponent}></Route>
            <Route path="/historyup" component={HistoryUPComponent}></Route>
            <Route path="/musicup" component={MusicUPComponent}></Route>
            <Route path="/*" component={IndexComponent}></Route>

        </Route>
    </Router>
    </Provider>
    ,document.getElementById("app"))