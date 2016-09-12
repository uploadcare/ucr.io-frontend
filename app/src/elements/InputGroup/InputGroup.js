import React, {Component} from 'react'
import cn from 'classnames'
import styles from './InputGroup.pcss'

const addClassNameToChild = (child) => {
	const classes = cn(
		styles.item,
		(child.type.name == 'Input') && styles.input
	)

	return React.cloneElement(child, {className: classes})
}

const InputGroup = ({
	children,
	className,
}) => {
	const classes = cn(
		styles.group,
		className
	)

	return (
		<div className={cn(classes)}>
			{React.Children.map(children, addClassNameToChild)}
		</div>
	)
}


export default InputGroup
