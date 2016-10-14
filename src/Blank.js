import React, { Component } from 'react'

class Blank extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false
    }
  }
  render() {
    var blankStyle = {
      backgroundColor: "#ccc",
      padding: "5px 10px",
      margin: "0 5px"
    }
    return (
      <span style={blankStyle}>{this.state.currentText}</span>
    );
  }
  fadeInText() {
    this.staggerTextFade(1);
  }
  staggerTextFade(i) {
    if (i <= this.props.value.length) {
      setTimeout(() => {
        var newText = this.props.value.substring(0, i);
        this.setState({
          currentText: newText
        })
        this.staggerTextFade(++i);
      }, 50)
    }
  }
}

export default Blank;