import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/App'
import routes from './routes.server'
import template from './template.ejs'

export default (locals, callback) => {
	const Page = routes[locals.path]

	if (!Page) {
		callback(null, 'Not Found')
	}
	else {
		callback(null, template({
			html: ReactDOMServer.renderToStaticMarkup(<App><Page/></App>),
		}))
	}
}
