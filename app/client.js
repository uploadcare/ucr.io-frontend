import React from 'react'
import ReactDOM from 'react-dom'
import {Demo} from './src/components'

// Client render (optional):
if (typeof document !== 'undefined') {
	const el = document.getElementById('demo')

	ReactDOM.render(<Demo/>, el)
}
