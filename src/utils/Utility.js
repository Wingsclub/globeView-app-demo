import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 812;

const widthScale = size => (width / baseWidth) * size;
const heightScale = size => (height / baseHeight) * size;

export { widthScale, heightScale };
