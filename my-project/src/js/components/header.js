import React from 'react'
import ReactDom from 'react-dom'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      minHeader: false
    }
  }
  handleClickHeader () {
    this.setState({
      minHeader: !this.state.minHeader
    })
  }
  render () {
    //      添加样式方式一
    const styleHeader = {
      header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: this.state.minHeader ? '3px 0' : '15px 0'
      }
    }
    return (
      <header style={styleHeader.header} className="header" onClick={this.handleClickHeader.bind(this)}>
        <h1>这里是头部</h1>
      </header>
    )
  }
}
