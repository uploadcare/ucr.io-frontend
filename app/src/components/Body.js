import React from 'react'
import cn from 'classnames'
import styles from './Body.pcss'

const Body = ({children}) => (
	<main className={cn(styles.body)}>
		{children}
	</main>
)

export default Body
