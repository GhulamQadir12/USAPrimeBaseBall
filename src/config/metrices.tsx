// import { Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// // console.log({ width, height } )
// const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

// //Default guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 375;//360//411
// const guidelineBaseHeight = 812;//686//683
// console.log(shortDimension,longDimension)
//  const scale = size => shortDimension / guidelineBaseWidth * size;
//  const vs = size => longDimension / guidelineBaseHeight * size;
//  const ms = (size, factor = 0.5) => size + (scale(size) - size) * factor;
//  const mvs = (size, factor = 0.5) => size + (vs(size) - size) * factor;

// export {scale, vs, ms,mvs,width,height};
import { Dimensions } from 'react-native';
// const {width, height} = Dimensions.get('window');
import { PixelRatio } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const xdHeight = (xdHeight: number) => {
  const heightPercent = Math.round((xdHeight / 812) * 100);
  return PixelRatio.roundToNearestPixel((height * heightPercent) / 100);
};
const xdWith = (xdWidth: number) => {
  const widthPercent = Math.round((xdWidth / 375) * 100);
  return PixelRatio.roundToNearestPixel((width * widthPercent) / 100);
};
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const vs = (size: number) => (height / guidelineBaseHeight) * size;
const ms = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;
const mvs = (size: number, factor = 0.5) => size + (vs(size) - size) * factor;

export { scale, vs, ms, mvs, height, width, xdHeight, xdWith };