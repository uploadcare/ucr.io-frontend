import React from 'react'

const proxyBase = 'https://fetch-magick.herokuapp.com/m/'
const demoImageUrl = 'http://placekitten.com/1000/500'
const operations = 'preview/-/crop/100x100/center/'
const demoUrl = `${proxyBase}${demoImageUrl}+${operations}`

const Demo = ({children}) => (
	<div>
		<h2>Using UCR</h2>
		<p>
			<b>{proxyBase}</b>
			http://your-url+
			<b>
				<a href="https://uploadcare.com/documentation/cdn/#image-operations">:effects</a>
			</b>
		</p>
		<h2>Example</h2>
		<p>
			<a href={demoUrl}>
				<b>{proxyBase}</b>
				{demoImageUrl}+
				<b>{operations}</b>
			</a>
		</p>
	</div>
)

export default Demo
