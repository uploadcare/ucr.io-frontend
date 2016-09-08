import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import {createHistory, createMemoryHistory} from 'history'
import {Router, RouterContext, match} from 'react-router'
import {Demo} from './src/components'

import routes from './routes'
import template from './template.ejs'

// Client render (optional):
if (typeof document !== 'undefined') {
	const history = createHistory()
	const el = document.getElementById('demo')

	ReactDOM.render(<Demo/>, el)
}

// Exported static site renderer:
export default (locals, callback) => {
	const location = createMemoryHistory().createLocation(locals.pathname)

	match({routes, location}, (error, redirectLocation, renderProps) => {
		if (error) {
			console.error(error)
			return callback(null, 'Internal server error')
		}
		if (!renderProps) return callback(null, 'Not found.')

		callback(null, template({
			html: ReactDOMServer.renderToStaticMarkup(<RouterContext {...renderProps} />),
			assets: locals.assets,
		}))
	})
}
