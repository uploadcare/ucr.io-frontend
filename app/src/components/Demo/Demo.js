import React, {Component} from 'react'
import config from './config'
import operationsToString from '../../lib/operations-to-string'
import {DemoInput} from './components'


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
	}

	render() {
		return (
			<div>
				{(typeof document !== 'undefined') &&
				<DemoInput/>
				}
			</div>
		)
	}
}

export default Demo
