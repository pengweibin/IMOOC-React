import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

class Index extends React.Component {
	render () {
    let component = <Footer></Footer>
		// 用处
		// if (用户未登录) {
		// 	component = 其他组件
		// }
		return (
			<div>
				<Header></Header>
				<Body></Body>
				{component}
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('example')
)
