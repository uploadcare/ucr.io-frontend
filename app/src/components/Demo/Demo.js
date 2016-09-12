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
			demoImageOperations: operationsToString(demoImageOperations),
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
		const {proxyBase, demoImageUrl, demoImageOperations, demoImageLoaded, operations} = this.state
		const url = demoImageUrl && `${proxyBase}${demoImageUrl}+${demoImageOperations}`

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
					{/*{demoImageLoaded &&*/}
					{/*<div className={styles.demoOperations}>*/}
						{/*<DemoOperations operations={operations}/>*/}
					{/*</div>*/}
					{/*}*/}
				</div>
				}
			</div>
		)
	}
}

export default Demo
