import React from 'react'
import ReactDom from 'react-dom'

export default class Header extends React.Component {
  render () {
    //      添加样式方式一
    const styleHeader = {
      header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px'
      }
    }
    return (
      <header style={styleHeader.header} className="header">
        <h1>这里是头部</h1>
      </header>
    )
  }
}
