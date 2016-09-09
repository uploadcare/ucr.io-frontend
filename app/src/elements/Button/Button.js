import React, {Component} from 'react'
import cn from 'classnames'
import styles from './Button.pcss'

const Button = ({
	children,
	colorType,
	className,
	onClick,
}) => {
	const classes = cn(
		styles.button,
		styles[colorType],
		className
	)

	return <button onClick={onClick} className={classes}>{children}</button>
}


export {Button}
