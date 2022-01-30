import axios from 'axios'
import { storageService } from './storageService.js'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,

}
async function getRate(coins) {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1';
    var rate = await axios.get(url)
    const coinRate = (1 / rate.data)
    return coinRate
}

async function getMarketPrice() {
    var prices = storageService.load('prices')
    if (prices) return prices
    console.log('load for api');
    const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    prices = await axios.get(url)
    console.log(prices.data);
    storageService.store('prices', prices.data)
    return prices.data
}

function getConfirmedTransactions() {

}