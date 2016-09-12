import React, {Component} from 'react'
import config from './config'
import operationsToString from '../../lib/operations-to-string'
import {DemoInput, DemoImage, DemoLink, DemoOperations} from './components'
import styles from './Demo.pcss'


class Demo extends Component {
	constructor(props) {
		super(props)

		const {proxyBase, demoImageUrl, demoImageOperations, operations} = config

		this.state = {
			proxyBase,
			demoImageUrl,
			demoImageOperations,
			operations,
			demoImageLoaded: false,
		}
	}

	changeUrl() {
		this.setState({
			demoImageUrl: this.demoInput.value,
			demoImageLoaded: false,
		})
	}

	onDemoImageLoad() {
		this.setState({demoImageLoaded: true})
	}

	updateDemoImageOperations(group, operation) {
		let replaced = false

		let newDemoImageOperations = [
			...(this.state.demoImageOperations.map(demoImageOperation => {
				if (demoImageOperation.group && demoImageOperation.group == group) {
					replaced = true

					return Object.assign({}, {
						group,
						title: operation,
					}, this.state.operations[group][operation])
				}

				return demoImageOperation
			})),
		]

		if (!replaced) {
			newDemoImageOperations.push(Object.assign({}, {
				group,
				title: operation,
			}, this.state.operations[group][operation]))
		}

		this.setState({demoImageOperations: newDemoImageOperations})
	}

	render() {
		const {proxyBase, demoImageUrl, demoImageOperations, demoImageLoaded, operations} = this.state
		const demoImageOperationsUrl = operationsToString(demoImageOperations)
		const url = demoImageUrl && `${proxyBase}${demoImageUrl}+${demoImageOperationsUrl}`
		const chosedOperations = demoImageOperations.map(operation => operation.title)

		return (
			<div>
				{(typeof document !== 'undefined') &&
				<div>
					<DemoInput
						inputRef={(ref) => this.demoInput = ref}
						onButtonClick={() => this.changeUrl()}/>
					{demoImageUrl &&
					<figure className={styles.demoImageContainer}>
						<DemoImage
							url={url}
							onLoad={() => this.onDemoImageLoad()}/>
						{demoImageLoaded &&
						<figcaption>
							<p className={styles.demoLinkHeading}>UCR link for your image:</p>
							<DemoLink
								{...this.state}
								operations={demoImageOperationsUrl}
								className={styles.demoLink}/>
						</figcaption>
						}
					</figure>
					}
					{demoImageLoaded &&
					<div className={styles.demoOperations}>
						<DemoOperations
							operations={operations}
							chosedOperations={chosedOperations}
							onChange={(group, operation) => this.updateDemoImageOperations(group, operation)}/>
					</div>
					}
				</div>
				}
			</div>
		)
	}
}

export default Demo
