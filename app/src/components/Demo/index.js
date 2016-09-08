import React from 'react'
import config from './config'
import operationsToString from '../../lib/operations-to-string'
import {DemoLink, DemoImage} from './components'

const {proxyBase, demoImageUrl, demoImageOperations} = config
const operations = operationsToString(demoImageOperations)

const Demo = ({children}) => (
	<div>
		<DemoLink {...{
			proxyBase,
			demoImageUrl,
			operations,
		}} />
		<DemoImage url={`${proxyBase}${demoImageUrl}+${operations}`}/>
	</div>
)

export default Demo
