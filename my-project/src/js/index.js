import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

class Index extends React.Component {
	constructor () {
		super()
		this.state = {
			userid: 123
		}
	}
	componentWillMount () {
		console.log('indexWill')
	}
	componentDidMount () {
		console.log('indexDid')
	}
	render () {
    let component = <Footer></Footer>
		setTimeout(() => {
			this.setState({
				userid: 456
			})
		}, 2000)
		// 用处
		// if (用户未登录) {
		// 	component = 其他组件
		// }
		return (
			<div>
				<Header></Header>
				<Body userid={this.state.userid}></Body>
				{component}
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('example')
)
