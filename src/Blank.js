import React, { Component } from 'react'

class Blank extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false
    }
  }
  render() {
    return (
      <span className="blank">{this.state.currentText}</span>
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