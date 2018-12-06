import React, { Component } from 'react'

export default class AboutPage extends Component {
  onClick = () => {
    const {history} = this.props
    history.goBack()
    //history.go(-1)  go back one page
  }
  render() {
    return (
      <div>
        <h2>About Page</h2>
         <button onClick={this.onClick}>go back</button> 
      </div>
    )
  }
}
