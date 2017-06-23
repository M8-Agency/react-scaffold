import React, { Component } from 'react';
import { BrowserRouter as Router, Route, link } from 'react-router-dom';
import Home from './Home'
import Step1 from './Step1'
import Share from './Share'
import Menu from '../components/Menu'

class App extends Component{

    constructor(){
        super();
        this.state = {
            access_token : '',
            listFriends : ''
        }
    }
    render(){
        return(
            <Router>
                <div>
                    <Menu />
                    <div className='container-fluid'>
                        <Route exact path='/' component={ Home }/>
                        <Route path='/step1' component={ Step1 } />
                        <Route path='/share/:video' component={ Share } />
                    </div>
                </div>
            </Router>
        )
    }

}

export default App;