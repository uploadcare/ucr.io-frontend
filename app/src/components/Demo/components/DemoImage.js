import React from 'react'
import cn from 'classnames'
import styles from './DemoImage.pcss'

const DemoImage = ({url}) => (
	<div className={cn(styles.container)}>
		<a href={url}>
			<img src={url} alt="" className={cn(styles.image)}/>
		</a>
	</div>
)

export default DemoImage
