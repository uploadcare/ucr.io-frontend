import React from 'react'
import cn from 'classnames'
import styles from './DemoLink.pcss'

const DemoLink = ({
	proxyBase,
	demoImageUrl,
	operations,
}) => (
	<div className={cn(styles.container)}>
		<h2 className={cn(styles.heading)}>UCR link for your image:</h2>
		<a href={`${proxyBase}${demoImageUrl}+${operations}`} className={cn(styles.link)}>
			<span className={cn(styles.linkPart)}><b>{proxyBase}</b></span>
			<span className={cn(styles.linkPart)}>{demoImageUrl}</span>
			<span className={cn(styles.linkPart)}>+<b>{operations}</b></span>
		</a>
	</div>
)

export default DemoLink
