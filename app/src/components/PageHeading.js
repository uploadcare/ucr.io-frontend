import React from 'react'
import cn from 'classnames'
import styles from './PageHeading.pcss'

const PageHeading = ({children}) => (
	<h1 className={cn(styles.pageHeading)}>{children}</h1>
)

export default PageHeading
