import React from 'react'
import cn from 'classnames'
import styles from './Footer.pcss'

const Footer = () => (
	<footer className={cn(styles.container)}>
		powered by <a href="http://uploadcare.com">uploadcare</a>
	</footer>
)

export default Footer
