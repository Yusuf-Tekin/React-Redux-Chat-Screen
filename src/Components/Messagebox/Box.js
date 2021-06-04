import React, { Component } from 'react'
import './Box.css'
import profile1 from '../../img/p1.jpg'

class Box extends Component {
    render() {
        return (
          <div className="box">
            <div className="profilePhoto">
              <img src={profile1} className="photo"></img>
            </div>
            <div className="nameAndLastMessage">
              <div className="nameandbadge">
                <h4>Yusuf Tekin</h4>
                <span className="badge">1</span>
              </div>
              <p>Yusuf: Nice</p>
            </div>
            <div className="time">
              <p>18:20</p>
            </div>
          </div>
        );
    }
}
export default Box;