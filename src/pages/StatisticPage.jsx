import React, { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from "../services/bitcoinService";

export class StatisticPage extends Component {

    state = {
        prices: null,
    }

    componentDidMount() {
        this.getMarketPrice()

    }

    async getMarketPrice() {
        var prices = await bitcoinService.getMarketPrice()

        prices = prices.values.map(value => {
            const date = new Date(value.x * 1000);
            value.name = date.toLocaleDateString()
            value.price = value.y
            delete value.y
            delete value.x
            return value
        })
        this.setState({ prices })
    }

    render() {
        const { prices } = this.state
        if (!prices) return <div>Loading...</div>
        return (
            <div>
                <Chart prices={prices} />
            </div>
        )
    }
}
