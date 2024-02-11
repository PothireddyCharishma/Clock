import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {
    todayTime: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({todayTime: new Date()})
  }

  render() {
    const {todayTime} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <h1 className="heading">{todayTime.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
