import React from 'react'
import cn from 'classnames'
import styles from './DemoInput.pcss'
import {Button, Input, InputGroup} from 'elements'

const DemoInput = ({
	value,
	inputRef,
	onButtonClick,
}) => (
	<div className={cn(styles.container)}>
		<InputGroup>
			<Input
				placeholder='Your image URL'
				value={value}
				inputRef={inputRef}/>
			<Button color='dark' onClick={onButtonClick}>Go</Button>
		</InputGroup>
	</div>
)

export default DemoInput
