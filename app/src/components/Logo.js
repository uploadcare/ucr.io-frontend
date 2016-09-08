import React from 'react'
import cn from 'classnames'
import styles from './Logo.pcss'

const Logo = ({children}) => (
	<div className={cn(styles.logoContainer)}>
		<a href="http://ucr.io" className={cn(styles.logo)}/>
	</div>
)

export default Logo
