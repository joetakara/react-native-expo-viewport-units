import { Dimensions } from 'react-native';
export const vw = number => Dimensions.get('window').width * (number / 100);
export const vh = number => Dimensions.get('window').height * (number / 100);
export const vmin = number => Math.min(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));
export const vmax = number => Math.max(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));
