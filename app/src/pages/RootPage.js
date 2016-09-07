import React, {Component} from 'react'
import {Header, Body, Footer} from '../components'

export default class RootPage extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Body>{this.props.children}</Body>
				<Footer/>
			</div>
		)
	}
}
