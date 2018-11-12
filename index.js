import { Dimensions } from 'react-native';

export const vw = percentageWidth => Dimensions.get('window').width * (percentageWidth / 100);
export const vh = percentageHeight => Dimensions.get('window').height * (percentageHeight / 100);
export const vmin = percentage => Math.min(Dimensions.get('window').width * (percentage / 100), Dimensions.get('window').height * (percentage / 100));
export const vmax = percentage => Math.max(Dimensions.get('window').width * (percentage / 100), Dimensions.get('window').height * (percentage / 100));
