import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'

import { HashRouter } from 'react-router-dom'

import Routes from './Routes'

import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Footer from '../componentes/template/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>