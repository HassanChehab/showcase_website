import React, { Component } from 'react'
import Header from './Header'

class HeaderMasterComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            tabulations: ['About me', 'skills', 'contact me']
        }
    }


    render() {
        return (
            <div>
                <Header tabulations={this.state.tabulations}/>
            </div>
        )
    } 
}

export default HeaderMasterComponent
