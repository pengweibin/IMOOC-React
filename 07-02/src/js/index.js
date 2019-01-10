import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'

class Index extends React.Component {
	render () {
		return (
			<div>
				<Header></Header>
				<div>页面的主题内容</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('example')
)
