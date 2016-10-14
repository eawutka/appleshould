import React, { Component } from 'react'
import _ from 'underscore'
import Blank from './Blank'
import generateName from './nameGenerator'
import companies from './companies'

class App extends Component {
  constructor() {
    super();
    this.changeCompany = this.changeCompany.bind(this);
    this.state = {
      blankIndex: 1,
      company: _.sample(companies)
    }
  }
  render() {
    return (
      <div className="main-container">
        <h1>
          Apple should buy
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.name}></Blank> 
        </h1>
        <h5>
          by
          <Blank ref={"blank-" + this.state.blankIndex++} value={generateName()}></Blank> 
        </h5>
        <p style={{lineHeight: "40px"}}>
          Apple is one of the most cash-rich companies in the world. As of last quarter, they had $216 billion in liquid assets just waiting to be spent. While significant cash reserves provide security and stability, we believe Apple has been too conservative and should purchase
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.name}></Blank>
          .
          <br />
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.name}></Blank>
          is a leader in the 
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.industry}></Blank>
          industry and could provide Apple with the talent and intellectual property that would greatly benefit its attempt to grow Apple with its 
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.industry}></Blank>
          efforts.
          <br />
          Apple could spend 
          <Blank ref={"blank-" + this.state.blankIndex++} value={`$${this.state.company.value} billion`}></Blank>
          on 
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.name}></Blank>.
          and still have 
          <Blank ref={"blank-" + this.state.blankIndex++} value={`$${216 - this.state.company.value} billion`}></Blank>
          in cash reserves.
          <br />
          Only time will tell whether Apple will follow through with this acquisition. Pundits often suggest Apple should make acquisitions that it fails to follow through on.
          <br />
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.CEO}></Blank>
          , CEO of
          <Blank ref={"blank-" + this.state.blankIndex++} value={this.state.company.name} ></Blank>
          and Apple CEO, Tim Cook, both declined to comment on the potential acquisition.
        </p>
        <div className="attribution">
          <a onClick={this.changeCompany} className="button">Win Pulitzer &nbsp;<i className="fa fa-trophy"></i></a>
          <p>A handy webapp designed to save tech journalists countless hours spent writing the same article every few weeks by doing it automatically.</p>
          <p>Made by <a target="_blank" href="http://ethanwutka.com/">Ethan Wutka</a> and <a target="_blank" href="http://timothybuck.me/">Timothy Buck</a> of <a target="_blank" href="http://nicer.io/">Nicer</a>.</p>
        </div>
      </div>
    )
  }
  componentDidMount() {
      this.staggerTextFade(1);
  }
  componentDidUpdate() {
    _.each(this.refs, (blank) => {
      blank.setState({currentText: ""})
    })
    this.staggerTextFade(1);
  }
  staggerTextFade(i) {
    if (this.refs["blank-" + i]) {
      setTimeout(() => {
        this.refs["blank-" + i].fadeInText()
        this.staggerTextFade(++i);
      }, 50)
    }
  }
  changeCompany() {
    this.setState({
      blankIndex: 1,
      company: this.getNewCompany()
    })
  }
  getNewCompany() {
    var newCompany = _.sample(companies);
    if (newCompany.name !== this.state.company.name) {
      return newCompany
    } else {
      return this.getNewCompany();
    }
  }
}

export default App;
