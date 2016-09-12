import React from 'react'
import styles from './DemoImage.pcss'
import ImageLoader from 'react-imageloader'
import {Spinner} from 'elements'

const DemoImage = ({
	url,
	onLoad,
}) => (
	<a href={url}>
		<ImageLoader
			src={url}
			className={styles.image}
			preloader={Spinner}
			onLoad={onLoad}>
			Something went wrong. Please, provide another image URL.
		</ImageLoader>
	</a>
)

export default DemoImage
