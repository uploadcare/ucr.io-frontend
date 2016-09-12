import React from 'react'
import cn from 'classnames'
import styles from './DemoLink.pcss'

const DemoLink = ({
	proxyBase,
	demoImageUrl,
	demoImageOperations,
	className,
}) => (
	<a href={`${proxyBase}${demoImageUrl}+${demoImageOperations}`} className={cn(styles.link, className)}>
		<span className={styles.part}>{proxyBase}</span>
		<span className={cn(styles.part, styles.url)}>{demoImageUrl}</span>
		<span className={styles.part}>+{demoImageOperations}</span>
	</a>
)

export default DemoLink
