export default {
	proxyBase: 'https://fetch-magick.herokuapp.com/m/',
	demoImageUrl: 'http://www.gratisography.com/pictures/333_1.jpg',
	demoImageOperations: [
		{
			name: 'preview',
		},
		{
			name: 'resize',
			value: 'x300',
		},
		{
			name: 'enhance',
		},
	],
	operations: [
		{
			name: 'format',
			operations: [
				{
					name: 'JPG',
					modificator: {
						name: 'format',
						value: 'jpg',
					},
				},
				{
					name: 'PNG',
					modificator: {
						name: 'format',
						value: 'png',
					},
				},
			],
		},
		{
			name: 'quality',
			operations: [
				{
					name: 'lightest',
					modificator: {
						name: 'quality',
						value: 'lightest',
					},
				},
				{
					name: 'light',
					modificator: {
						name: 'quality',
						value: 'light',
					},
				},
			],
		},
		{
			name: 'size',
			operations: [
				{
					name: 'resize',
					modificator: {
						name: 'resize',
						value: 'x300',
					},
				},
				{
					name: 'crop',
					modificator: {
						name: 'crop',
						value: '300x300',
						more: 'center',
					},
				},
			],
		},
		{
			name: 'effects',
			operations: [
				{
					name: 'enhance',
					modificator: {name: 'enhance'},
				},
				{
					name: 'grayscale',
					modificator: {name: 'grayscale'},
				},
			],
		},
	],
}
