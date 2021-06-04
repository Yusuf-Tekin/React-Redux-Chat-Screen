import React, { Component } from 'react'
import './Message.css'
class Message extends Component {
    render() {
        return (
          <div className="single-message">
            <div className="profile-photo">
              <img src={this.props.profileImage}></img>
            </div>
            <div className="message-text">
              <p>
                {this.props.message}
              </p>
            </div>
          </div>
        );
    }
}
export default Message;