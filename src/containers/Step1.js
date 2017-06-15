import React, { Component } from 'react';
import Usermedia from '../components/Usermedia'
import Upload from '../components/Upload'

class Step1 extends Component{

    render(){
        return(
            <div>
                <h2>Step1</h2>
                <Upload accept="image" index="0">Upload</Upload>
                <br/>
                <Usermedia />
            </div>
        )
    }

}

export default Step1;