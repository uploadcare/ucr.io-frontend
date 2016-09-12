import React from 'react'
import cn from 'classnames'
import styles from './DemoInput.pcss'
import {Button, Input, InputGroup} from 'elements'

const DemoInput = ({value}) => (
	<div className={cn(styles.container)}>
		<InputGroup>
			<Input placeholder='Your image URL' value={value}/>
			<Button color='dark'>Go</Button>
		</InputGroup>
	</div>
)

export default DemoInput
