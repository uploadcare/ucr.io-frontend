import React from 'react'
import cn from 'classnames'
import styles from './DemoLink.pcss'

const DemoLink = ({
	proxyBase,
	demoImageUrl,
	operations,
}) => (
	<a href={`${proxyBase}${demoImageUrl}+${operations}`} className={cn(styles.link)}>
		<span className={cn(styles.part, styles.mainPart)}>{proxyBase}</span>
		<span className={cn(styles.linkPart)}>{demoImageUrl}</span>
		<span className={cn(styles.part, styles.mainPart)}>+{operations}</span>
	</a>
)

export default DemoLink
