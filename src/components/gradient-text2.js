import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { mvs } from '../config/metrices';
import { useTheme } from '@react-navigation/native';


const GradientText2 = ({ text, style }) => {
  const themeColors = useTheme().colors; 
  console.log('from gradient :',themeColors.background
    
  )

  return (
    <View style={style}>
      <Svg height={50} width="100%" viewBox="50 0 200 50" >
      <Rect width="100%" height="100%" fill={themeColors.background}/>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="18.14%" stopColor="#FF0000" />
            <Stop offset="87.32%" stopColor="rgba(0, 0, 255, 0.53)" />
          </LinearGradient>
        </Defs>
        <SvgText
          x="20%"
          y="40%"
          fontSize={mvs(35.32)}
          fontFamily='Nunito'
          fontWeight={'700'}
          fill="url(#gradient)"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

// export default GradientText;
//working
// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import Svg, {
//   Text as SvgText,
//   Defs,
//   LinearGradient,
//   Stop,
// } from 'react-native-svg';
// import {mvs} from '../config/metrices';

// const GradientText = ({text, style}) => {
//   return (
//     <View style={style}>
//       <Svg height="100" width="100%" viewBox="0 0 200 100">
//         <Defs>
//           <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <Stop offset="18.14%" stopColor="#FF0000" />
//             <Stop offset="87.32%" stopColor="rgba(0, 0, 255, 0.53)" />
//           </LinearGradient>
//         </Defs>
//         <SvgText
//           x="-95"
//           y="48"
//           fontSize={mvs(34)}
//           fill="url(#gradient)"
//           dy=".3em">
//           {text}
//         </SvgText>
//       </Svg>
//     </View>
//   );
// };
export default GradientText2

