import React, { Component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom';
import Home from '../home'
import Step1 from '../step1'
import Menu from '../../components/menu'

class App extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Menu />
                    <div className='container'>
                        <Route exact path='/' component={Home}/>
                        <Route path='/step1' component={Step1}>
                            <Route path='/step1/sub' component={Step1} />
                        </Route>
                    </div>
                </div>
            </Router>
        )
    }

}

export default App;