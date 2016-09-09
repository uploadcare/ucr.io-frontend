import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes.client'

if (typeof document !== 'undefined') {
	const location = window.location.pathname
	const components = routes[location]

	if (components) {
		components.forEach(component => {
			const {PageComponent, elementId} = component
			const el = document.getElementById(elementId)

			if (el) {
				ReactDOM.render(<PageComponent/>, el)
			}
		})
	}
}
