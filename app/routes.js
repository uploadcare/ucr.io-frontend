import React from 'react'
import {Route, IndexRoute} from 'react-router'
import RootPage from './src/pages/RootPage'
import HomePage from './src/pages/HomePage'

const routes = (
	<Route path='/' component={RootPage}>
		<IndexRoute component={HomePage}/>
	</Route>
)

export default routes
