import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/App'
import routes from './routes.server'
import template from './template.ejs'

export default (locals, callback) => {
	const location = routes[locals.path]

	if (location === undefined) {
		callback(null, 'Not Found')
	}
	else {
		const Page = routes[locals.path]

		callback(null, template({
			html: ReactDOMServer.renderToStaticMarkup(<App><Page/></App>),
		}))
	}
}
