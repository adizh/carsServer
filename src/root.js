import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import  Home from './components/home';
import Catalog from "./components/catalog";
import CarModel from './components/carModel';
import Header from './components/header';
import About from './components/about'
import Contacts from "./components/contacts";
import {Provider} from 'react-redux';
import store from './redux';
import 'bootstrap/dist/css/bootstrap.min.css'
const Root = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route exact path='/catalog' component={() => <Catalog/>}/>
                    <Route exact path='/contacts' component={() => <Contacts/>}/>
                    <Route exact path='/about' component={()=> <About/>}/>
                    <Route exact path='/catalog/:carId' component={() => <CarModel/>}/>
                </Switch>
        </BrowserRouter>
        </Provider>
    );
};


export default Root;