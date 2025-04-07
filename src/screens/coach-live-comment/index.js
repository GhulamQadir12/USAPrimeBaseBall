import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../config/colors';
import Touchable from '../../components/atoms/button';
import Textinput from '../../components/atoms/textinput';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {AutoScrollFlatList} from "react-native-autoscroll-flatlist";
import {useWindowDimensions} from "react-native"
import { mvs } from '../../config/metrices';

export function useIsLandscape() {
    const {height, width} = useWindowDimensions()
    return width > height
  }
const CoachLiveComments = () => {
    
  const [textInput, setTextInput] = React.useState('');
  const [show, setShow] = React.useState(true);
  const [messages, setMessages] = React.useState([
    {id: 0, text: 'H'},
    {id: 1, text: 'How are you'},
    {id: 2, text: 'I am good'},
    {id: 3, text: 'How about you hlo'},
    {id: 4, text: 'How about you hlo'},
    {id: 5, text: 'How about you hlo'},
    {id: 6, text: 'How about you hlo'},
    {id: 7, text: 'How about you hlo'},
    {id: 8, text: 'How about you hlo'},
    { id: '10', text: 'H' },
    { id: '11', text: 'How are you' },
    { id: '21', text: 'I am good' },
    { id: '31', text: 'How about you hlo' },
    { id: '41', text: 'How about you hlo' },
    { id: '51', text: 'How about you hlo' },
    { id: '61', text: 'How about you hlo' },
    { id: '71', text: 'How about you hlo' },
    { id: '81', text: 'How about you hlo' },
  ]);
// const [messages, setMessages] = React.useState([
//     'H',
//     'How are you',
//    'I am good',
//    'How about you hlo',
//   ]);

console.log(useIsLandscape())
  const sendMessage = () => {
    if (textInput.trim()) {
      setMessages([...messages, {text: textInput, id: Date.now().toString()}]);
      setTextInput('');
    }
  };
  console.log(messages);
  const renderItem = ({item}) => (
     <View> 
      <View style={styles.messageContainer1}>
        <Image source={IMG.commentator2} style={styles.image2} />
        <View style={styles.messageBubble2}>
          <Text style={{...styles.text2, color: '#2F2D2D'}}>Jhon</Text>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>

      <View style={styles.messageContainer1}>
        <Image source={IMG.commentator1} style={styles.image2} />
        <View style={styles.messageBubble2}>
          <Text>Sam</Text>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
     </View> 
  );

  const flatListRef = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <View style={styles.container}>
    {console.log('i am console',useIsLandscape())}
      <ImageBackground
        source={IMG.pic}
        resizeMode={useIsLandscape() ? 'stretch' : 'cover'}
        // resizeMode='cover'
        style={styles.image}>
        <>
          {show ? (
            <View style={styles.header}>
              <View style={styles.headerinside}>
                <Image
                  source={IMG.commentpic}
                  style={styles.image1}
                  resizeMode= 'contain'
                />
                <View>
                  <Text style={styles.text1}>Jhon Doe</Text>
                  <Text style={styles.text2}>2 hours ago</Text>
                </View>
                <View style={styles.live}>
                  <Text style={{...styles.text2, color: colors.white}}>
                    Live
                  </Text>
                </View>
              </View>

              <Touchable
                icon2={<Entypo name="cross" size={25} color={colors.red} />}
                buttonstyle={styles.buttonstyle2}
                onPress={() => setShow(false)}
              />
            </View>
          ) : null}
        </>
        <View style={styles.flatlistcontainer}>
        <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                inverted={true}
              />
        </View>
    
        <View style={styles.bottom}>
          <TextInput
            placeholder={'Write a comment...'}
            style={styles.input}
            value={textInput}
            onChangeText={setTextInput}
            multiline={true}
          />
          <Touchable
            leftImage={IMG.sender2}
            buttonstyle={styles.buttonstyle}
            onPress={sendMessage}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CoachLiveComments;


// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   Image,
//   TextInput,
//   FlatList,
// } from 'react-native';
// import React from 'react';
// import styles from './style';
// import * as IMG from '../../assets/images/images';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {colors} from '../../config/colors';
// import Touchable from '../../components/atoms/button';
// import Textinput from '../../components/atoms/textinput';
// import LinearGradient from 'react-native-linear-gradient';
// import Swiper from 'react-native-swiper';
// import {AutoScrollFlatList} from "react-native-autoscroll-flatlist";
// import {useWindowDimensions} from "react-native"
// import { mvs } from '../../config/metrices';

// export function useIsLandscape() {
//     const {height, width} = useWindowDimensions()
//     return width > height
//   }
// const CoachLiveComments = () => {
    
//   const [textInput, setTextInput] = React.useState('');
//   const [show, setShow] = React.useState(true);
//   const [messages, setMessages] = React.useState([
//     {id: 0, text: 'H'},
//     {id: 1, text: 'How are you'},
//     {id: 2, text: 'I am good'},
//     {id: 3, text: 'How about you hlo'},
//     {id: 4, text: 'How about you hlo'},
//     {id: 5, text: 'How about you hlo'},
//     {id: 6, text: 'How about you hlo'},
//     {id: 7, text: 'How about you hlo'},
//     {id: 8, text: 'How about you hlo'},
//   ]);
// // const [messages, setMessages] = React.useState([
// //     'H',
// //     'How are you',
// //    'I am good',
// //    'How about you hlo',
// //   ]);

// console.log(useIsLandscape())
//   const sendMessage = () => {
//     if (textInput.trim()) {
//       setMessages([...messages, {text: textInput, id: Date.now().toString()}]);
//       setTextInput('');
//     }
//   };
//   console.log(messages);
//   const renderItem = ({item}) => (
//     // <Swiper horizontal={false} style={{width:mvs(250),height:mvs(80)}} showsButtons={false} autoplay={true}>
//      <View> 
//       <View style={styles.messageContainer1}>
//         <Image source={IMG.commentator2} style={styles.image2} />
//         <View style={styles.messageBubble2}>
//           <Text style={{...styles.text2, color: '#2F2D2D'}}>Jhon</Text>
//           <Text style={styles.messageText}>{item.text}</Text>
//         </View>
//       </View>

//       <View style={styles.messageContainer1}>
//         <Image source={IMG.commentator1} style={styles.image2} />
//         <View style={styles.messageBubble2}>
//           <Text>Sam</Text>
//           <Text style={styles.messageText}>{item.text}</Text>
//         </View>
//       </View>
//      </View> 
//   );




//   return (
//     <View style={styles.container}>
//     {console.log('i am console',useIsLandscape())}
//       <ImageBackground
//         source={IMG.pic}
//         resizeMode={useIsLandscape() ? 'stretch' : 'cover'}
//         // resizeMode='cover'
//         style={styles.image}>
//         <>
//           {show ? (
//             <View style={styles.header}>
//               <View style={styles.headerinside}>
//                 <Image
//                   source={IMG.commentpic}
//                   style={styles.image1}
//                   resizeMode= 'contain'
//                 />
//                 <View>
//                   <Text style={styles.text1}>Jhon Doe</Text>
//                   <Text style={styles.text2}>2 hours ago</Text>
//                 </View>
//                 <View style={styles.live}>
//                   <Text style={{...styles.text2, color: colors.white}}>
//                     Live
//                   </Text>
//                 </View>
//               </View>

//               <Touchable
//                 icon2={<Entypo name="cross" size={25} color={colors.red} />}
//                 buttonstyle={styles.buttonstyle2}
//                 onPress={() => setShow(false)}
//               />
//             </View>
//           ) : null}
//         </>
//         <View style={styles.flatlistcontainer}>
//           <FlatList
//             data={messages}
//             keyExtractor={item => item.id}
//             renderItem={renderItem}
//             showsVerticalScrollIndicator={false}
//             inverted={true}
//           />
//         </View>
//         {/* <View style={{flex:1}}>
//             <Item messages={messages}/>
//         </View> */}
//         <View style={styles.bottom}>
//           <TextInput
//             placeholder={'Write a comment...'}
//             style={styles.input}
//             value={textInput}
//             onChangeText={setTextInput}
//             multiline={true}
//             // numberOfLines={6}
//           />
//           <Touchable
//             leftImage={IMG.sender2}
//             buttonstyle={styles.buttonstyle}
//             onPress={sendMessage}
//           />
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default CoachLiveComments;
