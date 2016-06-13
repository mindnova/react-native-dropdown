
import ReactNative from 'react-native'
import {
  NativeModules
} from 'react-native'
const {UIManager} = NativeModules

export default function updatePosition(ref, debug) {
  const handle = ReactNative.findNodeHandle(ref);
  setTimeout(() => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY);
      }
      ref._currentPosition(pageX, pageY);
    });
  }, 0);
}

