// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {InputText: ''}

  onTypedCount = event => {
    this.setState({InputText: event.target.value})
  }

  render() {
    const {InputText} = this.state
    const count = InputText.length
    return (
      <div className="container">
        <div className="container1">
          <div className="container2">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="para" htmlFor="userInput">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-style"
              onChange={this.onTypedCount}
              id="userInput"
            />
            <p className="paragraph">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
