import React, {Component} from 'react'

export default class RootPage extends Component {
	render() {
		return (
			<div>
				<p>root</p>
				{this.props.children}
			</div>
		)
	}
}
