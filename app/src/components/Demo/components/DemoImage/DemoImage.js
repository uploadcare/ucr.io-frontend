import React from 'react'
import styles from './DemoImage.pcss'
import ImageLoader from 'react-imageloader'
import {Spinner} from 'elements'

const DemoImage = ({
	url,
	onLoad,
}) => (
	<a href={url} className={styles.link}>
		<ImageLoader
			src={url}
			imgProps={{className: styles.image}}
			preloader={Spinner}
			onLoad={onLoad}>
			<div className={styles.errorMessage}>
				<p>Something went wrong.</p>
				<p>Please, provide another image URL.</p>
			</div>
		</ImageLoader>
	</a>
)

export default DemoImage
