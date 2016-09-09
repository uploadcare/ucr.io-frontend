import React, {Component} from 'react'
import config from './config'
import operationsToString from '../../lib/operations-to-string'
import {DemoLink, DemoImage} from './components'


class Demo extends Component {
	constructor(props) {
		super(props)

		const {proxyBase, demoImageUrl, demoImageOperations} = config
		const operations = operationsToString(demoImageOperations)

		this.state = {
			proxyBase,
			demoImageUrl,
			operations,
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick() {
		this.setState({
			demoImageUrl: 'http://placekitten.com/100/300',
		})
	}

	componentDidMount() {
		console.log('hi')
	}

	render() {
		const {proxyBase, demoImageUrl, operations} = this.state

		return (
			<div>
				<DemoLink {...{
					proxyBase,
					demoImageUrl,
					operations,
				}} />
				<DemoImage url={`${proxyBase}${demoImageUrl}+${operations}`}/>
				<button onClick={this.onClick}>Click me</button>
			</div>
		)
	}
}

export default Demo
