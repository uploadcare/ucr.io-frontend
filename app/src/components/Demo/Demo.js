import React, {Component} from 'react'
import config from './config'
import operationsToString from '../../lib/operations-to-string'
import {DemoInput, DemoImage, DemoLink} from './components'
import styles from './Demo.pcss'


class Demo extends Component {
	constructor(props) {
		super(props)

		const {proxyBase, demoImageUrl, demoImageOperations} = config
		const operations = operationsToString(demoImageOperations)

		this.state = {
			proxyBase,
			demoImageUrl,
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

	render() {
		const {proxyBase, demoImageUrl, operations, demoImageLoaded} = this.state
		const url = demoImageUrl && `${proxyBase}${demoImageUrl}+${operations}`

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
							<DemoLink {...this.state} className={styles.demoLink}/>
						</figcaption>
						}
					</figure>
					}
				</div>
				}
			</div>
		)
	}
}

export default Demo
