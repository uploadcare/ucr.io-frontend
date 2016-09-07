import React, {Component} from 'react'
import {Demo} from '../components'

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<h1>Resize and optimise images by using URL commands</h1>
				<Demo/>
				<h2>What is UCR?</h2>
				<p>
					UCR is a simple image resizing proxy that can resize images,
					change image formats and optimize images for your web site.
					It is based on Uploadcare CDN API.
				</p>
				<h2>How it works</h2>
				<p>
					It works very much like a CDN. UCR parses the URL, downloads the image and caches it.
					Then it applies transformations on our servers, and caches the result.
				</p>
				<h2>May I have one?</h2>
				<p>
					Sure, it's opensource. Just get a free heroku account and type:
				</p>
				<pre>
					<code>
						git clone git@github.com:uploadcare/ushare.git<br/>
						git remote set-url origin my_heroku_repo_url<br/>
						git push origin master
					</code>
				</pre>
				<p>
					— and that's it!
				</p>
			</div>
		)
	}
}
