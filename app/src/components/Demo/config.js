export default {
	proxyBase: 'https://fetch-magick.herokuapp.com/m/',
	demoImageUrl: '',
	demoImageOperations: [
		{
			name: 'preview',
		},
		{
			group: 'size',
			title: 'resize',
			name: 'resize',
			value: 'x300',
		},
		{
			group: 'effects',
			title: 'enhance',
			name: 'enhance',
		},
	],
	operations: {
		format: {
			JPG: {
				name: 'format',
				value: 'jpg',
			},
			PNG: {
				name: 'format',
				value: 'png',
			},
		},
		size: {
			resize: {
				name: 'resize',
				value: 'x300',
			},
			crop: {
				name: 'crop',
				value: '300x300',
				more: 'center',
			},
		},
		effects: {
			enhance: {name: 'enhance'},
			grayscale: {name: 'grayscale'},
		},
	},
}
