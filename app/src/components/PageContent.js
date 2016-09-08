import React from 'react'
import cn from 'classnames'
import styles from './PageContent.pcss'

const PageContent = ({children}) => (
	<div className={cn(styles.pageContent)}>{children}</div>
)

export default PageContent
