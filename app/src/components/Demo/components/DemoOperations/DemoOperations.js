import React from 'react'
// import cn from 'classnames'
import styles from './DemoOperations.pcss'
import {Button} from 'elements'

const DemoOperations = ({
	operations,
	className,
}) => (
	<ul className={styles.container}>
		{operations.map(group => (
			<li className={styles.group}>
				<span className={styles.groupName}>{group.name}</span>

				<ul className={styles.groupOperations}>
					{group.operations.map(operation => (
						<li className={styles.operation}>
							<Button className={styles.button}>{operation.name}</Button>
						</li>
					))}
				</ul>
			</li>
		))}
	</ul>
)

export default DemoOperations
