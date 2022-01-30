import React, { Component } from 'react'
import { userService } from "../services/userService";
import { bitcoinService } from '../services/bitcoinService'

export class HomePage extends Component {

    state = {
        user: null,
        value: null,
    }

    async componentDidMount() {
        await this.loadUser();
        this.loadValue()
    }

    loadUser = async () => {
        const user = userService.getUser()
        if (Object.keys(user).length === 0) {
            this.props.history.push(`/signup`)
        }
        this.setState({ user })
    }

    async loadValue() {
        var value = await bitcoinService.getRate(this.state.user.coins)
        value *= this.state.user.coins;
        this.setState({ value })
    }

    render() {
        const { user, value } = this.state
        if (!(user && value)) return <div>Loading..</div>
        return (
            <div className='home-containter'>
                <h1>Welcome {user.name}</h1>
                <div>
                    <h3>coins : {user.coins}</h3>
                    <h3>value : ${value.toFixed(2)}</h3>
                </div>
            </div>
        )
    }
}
