import React, { Component } from "react";
import { connect } from "react-redux";
import "./Main.css";
import MessageBox from "./Messagebox/MessageBox";
import Messages from "./Messages/Messages";

class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="message-app">
        {this.props.menuReducer === false ? (
          <div className="left" style={{ width: "5%" }}>
            <MessageBox />
          </div>
        ) : (
          <div className="left">
            <MessageBox />
          </div>
        )}
        {this.props.menuReducer === false ? (
          <div className="right" style={{ width: "95%" }}>
            <Messages />
          </div>
        ) : (
          <div className="right">
            <Messages />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(Main);
