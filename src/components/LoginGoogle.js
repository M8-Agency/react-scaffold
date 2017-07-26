import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import * as firebase from 'firebase'
import firebaseConfig from '../config/firebaseConfig'
import PropTypes from 'prop-types';
import style from '../templates/components/LoginGoogle.css'

firebase.initializeApp(firebaseConfig)

/** Component for Authenticate with google */
class LoginGoogle extends Component{

    constructor(){
        super();
        this.state = {
            accessToken : null,
            user : {},
            isAuthenticated : false
        }
        this.login = this.login.bind(this);
    }

    /**
     * Authenticate on Google
     * https://developers.google.com/identity/protocols/googlescopes 
     */    
    login(){
        const provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('profile');
        provider.addScope('email');
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            this.setState({
                accessToken : result.credential.accessToken,
                user : result.user,
                isAuthenticated : true
            })
            
            sessionStorage.setItem('accessToken', result.credential.accessToken);
            sessionStorage.setItem('user', JSON.stringify(result.user));

            (this.props.onAuthenticate) ? this.props.onAuthenticate(result) : null; 

        }.bind(this)).catch(function(error) {
        
            // Handle Errors here.
            (this.props.onError) ? this.props.onError(error) : null;
        
        }.bind(this));
    }

    render(){

        let layoutLoginButton = (<button className="login-google__login-button" onClick={ this.login }>{ this.props.locale.BTN_LABEL }</button>);

        let layoutStartButton = (
            <div>
                <img className="login-google__photo" src={ this.state.user.photoURL } />
                <span className="login-google__username">{ this.state.user.displayName }</span>
            </div>
        )
        
        return(
            <div className="login-google">
                { (!this.state.isAuthenticated) ? layoutLoginButton : layoutStartButton }
            </div>
        )
    }
}

LoginGoogle.propTypes = {
    onAuthenticate : PropTypes.func,
    onError : PropTypes.func,
    locale : PropTypes.object
};

LoginGoogle.defaultProps = {
    onAuthenticate : false,
    onerror : false,
    locale : {
        'BTN_LABEL' : 'Login with Google'
    }
};

export default LoginGoogle;