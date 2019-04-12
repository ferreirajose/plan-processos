import React, { Component } from 'react'

import '../common/dependencie';

import Header from '../common/template/header';
import Search from '../common/template/search';
import Sidebar from '../common/template/sidebar';

import Routes from '../routes/routes';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <Search />
                    <Routes />
                </div>
            </div>
        )
    }
}

export default App;