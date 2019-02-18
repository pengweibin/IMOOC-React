import React from 'react'
import ReactDOM from 'react-dom'
// var footerCss = require('../../css/footer.css')
// import footerCss from '@/css/footer.css'

export default class Footer extends React.Component {
  render () {
    const footerStyle = {
      "minFooter": {
        "fontSize": "14px",
        "backgroundColor": "#333",
        "color": "#fff",
        "padding": "10px 3px"
      }
    }
    console.log(footerStyle)
    return (
      <footer className={footerStyle.minFooter}>
        <h1>这是页脚, 一般放置版权的一些信息</h1>
      </footer>
    )
  }
}
