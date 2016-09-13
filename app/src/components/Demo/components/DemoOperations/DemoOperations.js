import React from 'react'
import cn from 'classnames'
import styles from './DemoOperations.pcss'
import {Button} from 'elements'

const DemoOperations = ({
	operations,
	chosedOperations,
	onChange,
	className,
}) => {
	const isChosedOperation = (operation) => ~chosedOperations.indexOf(operation)

	return (
		<ul className={styles.container}>
			{Object.keys(operations).map(groupName => (
				<li key={groupName} className={styles.group}>
					<span className={styles.groupName}>{groupName}</span>

					<ul className={styles.groupOperations}>
						{Object.keys(operations[groupName]).map(operationName => {
							const active = isChosedOperation(operationName)

							return (
								<li key={operationName} className={styles.operation}>
									<Button
										active={active}
										className={cn(styles.button, active && styles.active)}
										onClick={() => !active && onChange(groupName, operationName)}>
										{operationName}
									</Button>
								</li>
							)
						})}
					</ul>
				</li>
			))}
		</ul>
	)
}

export default DemoOperations
