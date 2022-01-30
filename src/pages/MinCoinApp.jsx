import React, { Component } from 'react'
import { HomePage } from "./HomePage";



export class MinCoinApp extends Component {
    render() {
        return (
            <div className='coin-app'>
                <HomePage history={this.props.history} />
            </div>
        )
    }
}
