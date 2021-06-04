import React, { Component } from 'react'
import {ArrowUpSquareFill} from 'react-bootstrap-icons'
import './Messages.css'
import profile1 from "../../img/p1.jpg";
import profile2 from "../../img/p2.jpg";
import Message from './Message'
class Messages extends Component {
    render() {
        return (
          <div className="messages">
            <div className="top">
              <Message
                message={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                }
                profileImage={profile1}
              />
              <Message
                message={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                }
                profileImage={profile2}
              />
              <Message
                message={
                  " Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
                profileImage={profile2}
              />
              <Message
                message={
                  " Lorem Ipsum passages, and more established fact that a reader will be distracted by the readable content of a page when versions of Lorem Ipsum."
                }
                profileImage={profile1}
              />
              <Message
                message={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure "
                }
                profileImage={profile2}
              />
              <Message message={"Nice"} profileImage={profile1} />
            </div>
            <div className="bottom">
              <input
                type="text"
                className="message-input"
                placeholder="Message"
              />
              <button title="Send" className="sendButton">
                <ArrowUpSquareFill></ArrowUpSquareFill>
              </button>
            </div>
          </div>
        );
    }
}
export default Messages;