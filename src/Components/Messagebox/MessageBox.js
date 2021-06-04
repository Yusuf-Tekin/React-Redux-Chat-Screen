import React, { Component } from "react";
import "./MessageBox.css";
import Box from "./Box";
import { BoxMenuAction } from "../../Redux/Action/actions";
import { List, ChatLeftText } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class MessageBox extends Component {
  constructor(props) {
    super(props);
  }
  menuchangestate = () => {
    this.props.menuToggle(BoxMenuAction);
  };

  render() {
    return (
      <div className="message-box">
        <div className="header">
          {this.props.menuReducer === true ? (
            <div className="condition-block">
              <ChatLeftText className="icon" id="iconL" />
              <h5 className="title">Message Boxes</h5>
              <List
                className="icon"
                id="iconR"
                onClick={this.menuchangestate}
              />
            </div>
          ) : (
            <List className="icon" id="iconR" onClick={this.menuchangestate} style = {{top: "6px"}} />
          )}
        </div>
        <div className="message-boxes">
          {
            this.props.menuReducer === true ? 
            <div>
              <Box />
            </div>
            :
            <div></div>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    menuToggle: bindActionCreators(BoxMenuAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
