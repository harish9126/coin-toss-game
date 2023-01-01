import {Component} from 'react'
import './index.css'

const urls = {
  headUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  tailUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    coinStatus: 0,
  }

  coin = () => {
    const {coinStatus} = this.state
    return coinStatus ? urls.tailUrl : urls.headUrl
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {heads, tails, total, coinStatus} = this.state

    this.setState({
      heads: tossResult ? heads : heads + 1,
      tails: tossResult ? tails + 1 : tails,
      total: total + 1,
      coinStatus: tossResult,
    })
  }

  render() {
    const {total, heads, tails, coinStatus} = this.state

    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img src={this.coin()} alt="toss result" className="coin-image" />
          <button
            onClick={this.onClickToss}
            type="button"
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="stats-container">
            <p className="stat">Total: {total}</p>
            <p className="stat">Heads: {heads}</p>
            <p className="stat">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
