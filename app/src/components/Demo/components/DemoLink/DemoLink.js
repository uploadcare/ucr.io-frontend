import React from 'react'
import cn from 'classnames'
import styles from './DemoLink.pcss'

const DemoLink = ({
	proxyBase,
	demoImageUrl,
	operations,
	className,
}) => (
	<a href={`${proxyBase}${demoImageUrl}+${operations}`} className={cn(styles.link, className)}>
		<span className={styles.part}>{proxyBase}</span>
		<span className={cn(styles.part, styles.url)}>{demoImageUrl}</span>
		<span className={styles.part}>+{operations}</span>
	</a>
)

export default DemoLink
