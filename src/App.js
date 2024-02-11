import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    showClock: false,
  }

  onClickClock = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.onClickClock}
          className="toggle-button"
        >
          {showClock === false ? 'Show Clock' : 'Hide Clock'}
        </button>
        {showClock === false ? '' : <Clock />}
      </div>
    )
  }
}

export default App
