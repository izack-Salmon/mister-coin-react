import React, { Component } from 'react'
export class TransferFund extends Component {
    // export function TransferFund(amount) {

    state = {
        amount: 0,
    }

    handleChange = ({ target }) => {
        const amount = +target.value
        this.setState({ amount })
    }

    onTransferFunds = () => {
        const { amount } = this.state
    }

    render() {
        const { amount } = this.state
        return (
            <div>
                <button onClick={this.onTransferFunds} >Transfer</button>
                <label htmlFor="name">name</label>
                <input onChange={this.handleChange} value={amount} name="name" type="number" />
            </div >
        )
    }
}