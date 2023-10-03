// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickBtn = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?{' '}
        </h1>
        <ul className="list-container">
          {emojis.map(eachItem => (
            <li key={eachItem.id} className="list-item">
              <button
                type="button"
                className="button"
                onClick={this.onClickBtn}
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji-el"
                />
              </button>
              <span className="paragraph">{eachItem.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji-love" />
        <h1 className="heading">Thank You!</h1>
        <p className="paragraph">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedbackSelected
            ? this.renderThankScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
