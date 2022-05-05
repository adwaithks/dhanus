import React, { Component } from "react";
import './CountDown.scss'

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className="count-down">
        <div className="Clock-days">
            <h1>Days</h1>
            {this.leading0(this.state.days)}
        </div>
        <div className="Clock-hours">
            <h1>Hours</h1>
          {this.leading0(this.state.hours)}
        </div>
        <div className="Clock-minutes">
            <h1>Minutes</h1>
          {this.leading0(this.state.minutes)}
        </div>
        <div className="Clock-seconds">
            <h1>Seconds</h1>
          {this.leading0(this.state.seconds)}
        </div>
      </div>
    );
  }
}
export default CountDown;
