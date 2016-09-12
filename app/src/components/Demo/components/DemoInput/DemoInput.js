import React from 'react'
import cn from 'classnames'
import styles from './DemoInput.pcss'
import {Button} from 'elements/Button/Button'

const DemoImage = ({url}) => (
	<div className={cn(styles.container)}>
		<div>
			<input type='text'/>
			<Button color='dark'>Go</Button>
		</div>
	</div>
)

export default DemoImage
