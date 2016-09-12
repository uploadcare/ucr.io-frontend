import React, {Component} from 'react'
import cn from 'classnames'
import styles from './Input.pcss'

const Input = ({
	value,
	placeholder,
	type = 'text',
	className,
	onChange,
}) => {
	const classes = cn(
		styles.input,
		styles[type],
		className
	)

	return <input
		defaultValue={value}
		placeholder={placeholder}
		type={type}
		className={classes}
		onChange={onChange}/>
}


export {Input}
