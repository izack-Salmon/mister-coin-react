import React, { Component } from 'react'
import { userService } from "../services/userService.js";

export class SignupPage extends Component {
    state = {
        name: '',
    }

    handleChange = async ({ target }) => {
        const name = target.value
        this.setState({ name })
        console.log(this.state.name);
    }

    onSginup = (ev) => {
        const { name } = this.state
        ev.preventDefault()
        userService.signup(name)
        this.props.history.push('/')
    }

    render() {
        const { name } = this.state
        // console.log(this);
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.onSginup}>
                    <label htmlFor="name">Please enter your name</label>
                    <input onChange={this.handleChange} value={name} name="name" type="text" id='name' />
                    <button>Sginup</button>
                </form>
            </div>
        )
    }
}
