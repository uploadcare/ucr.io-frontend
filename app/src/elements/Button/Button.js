import React, {Component} from 'react'
import cn from 'classnames'
import styles from './Button.pcss'

const Button = ({
	children,
	color,
	className,
	onClick,
	active,
}) => {
	const classes = cn(
		styles.button,
		styles[color],
		className,
		active && styles.active
	)

	return <button onClick={(e) => {
		e.target.blur()
		onClick()
	}} className={classes}>{children}</button>
}


export {Button}
