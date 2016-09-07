import React, {Component} from 'react'
import {Header, Body, Footer} from './components'
import './global.pcss'

export default class App extends Component {
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
