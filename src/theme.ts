import { extendTheme } from 'native-base';

const config = {
	useSystemColorMode: false,
	initialColorMode: 'dark'
};

const colors = {
	primary: {
		50: '#eeeef6',
		100: '#d3cfe7',
		200: '#b5b1d8',
		300: '#9b92c9',
		400: '#8374b9',
		500: '#5b55aa',
		600: '#444688',
		700: '#3c3366',
		800: '#272244',
		900: '#100c1c'
	}
};

export default extendTheme({ config, colors });
