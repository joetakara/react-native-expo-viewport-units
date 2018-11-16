# react-native-expo-viewport-units
Viewport units: vw, vh, vmin, vmax - [React Native](https://github.com/facebook/react-native).

## Install
```sh
$ npm install react-native-expo-viewport-units
```

or

```sh
$ yarn add react-native-expo-viewport-units
```

## Usage
```javascript
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
```

```javascript
<View style={{ width: vw(100), height: vh(100) }}>
  ...
<View>
```

```javascript
var styles = StyleSheet.create({
  Container: {
    width: vmin(95),
    height: vmax(70),
    padding: vw(2.5),
    margin: vh(5),
  },
  Font: {
    fontSize: vw(3.75),
  },
});
```

## License
MIT © Joe Takara
