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
const DirectorLiveComments = () => {
    
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

export default DirectorLiveComments;


// import React, { useRef, useEffect, useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   Image,
//   TextInput,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from 'react-native';
// // import styles from './style';
// import * as IMG from '../../assets/images/images';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { colors } from '../../config/colors';
// import Touchable from '../../components/atoms/button';
// import { useWindowDimensions } from 'react-native';
// import { mvs } from '../../config/metrices';

// export function useIsLandscape() {
//   const { height, width } = useWindowDimensions();
//   return width > height;
// }

// const DirectorLiveComments = () => {
//   const [textInput, setTextInput] = useState('');
//   const [show, setShow] = useState(true);
//   const [messages, setMessages] = useState([
//     { id: '0', text: 'H' },
//     { id: '1', text: 'How are you' },
//     { id: '2', text: 'I am good' },
//     { id: '3', text: 'How about you hlo' },
//     { id: '4', text: 'How about you hlo' },
//     { id: '5', text: 'How about you hlo' },
//     { id: '6', text: 'How about you hlo' },
//     { id: '7', text: 'How about you hlo' },
//     { id: '8', text: 'How about you hlo' },
//     { id: '10', text: 'H' },
//     { id: '11', text: 'How are you' },
//     { id: '21', text: 'I am good' },
//     { id: '31', text: 'How about you hlo' },
//     { id: '41', text: 'How about you hlo' },
//     { id: '51', text: 'How about you hlo' },
//     { id: '61', text: 'How about you hlo' },
//     { id: '71', text: 'How about you hlo' },
//     { id: '81', text: 'How about you hlo' },
//   ]);

//   const flatListRef = useRef(null);

//   const sendMessage = () => {
//     if (textInput.trim()) {
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: textInput, id: Date.now().toString() },
//       ]);
//       setTextInput('');
//     }
//   };

//   useEffect(() => {
//     // Delay scroll to ensure that FlatList has updated
//     const timer = setTimeout(() => {
//       if (flatListRef.current) {
//         flatListRef.current.scrollToEnd({ animated: true });
//       }
//     }, 100); // Adjust delay if needed

//     return () => clearTimeout(timer);
//   }, [messages]);

//   const renderItem = ({ item }) => (
//     <View style={styles.messageContainer1}>
//       <Image source={IMG.commentator2} style={styles.image2} />
//       <View style={styles.messageBubble2}>
//         <Text style={{ ...styles.text2, color: '#2F2D2D' }}>Jhon</Text>
//         <Text style={styles.messageText}>{item.text}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.innerContainer}>
//           <ImageBackground
//             source={IMG.pic}
//             resizeMode={useIsLandscape() ? 'stretch' : 'cover'}
//             style={styles.image}
//           >
//             {show && (
//               <View style={styles.header}>
//                 <View style={styles.headerinside}>
//                   <Image
//                     source={IMG.commentpic}
//                     style={styles.image1}
//                     resizeMode='contain'
//                   />
//                   <View>
//                     <Text style={styles.text1}>Jhon Doe</Text>
//                     <Text style={styles.text2}>2 hours ago</Text>
//                   </View>
//                   <View style={styles.live}>
//                     <Text style={{ ...styles.text2, color: colors.white }}>
//                       Live
//                     </Text>
//                   </View>
//                 </View>
//                 <Touchable
//                   icon2={<Entypo name="cross" size={25} color={colors.red} />}
//                   buttonstyle={styles.buttonstyle2}
//                   onPress={() => setShow(false)}
//                 />
//               </View>
//             )}
//             <View style={styles.flatlistcontainer}>
//               <FlatList
//                 ref={flatListRef}
//                 data={messages}
//                 keyExtractor={item => item.id}
//                 renderItem={renderItem}
//                 showsVerticalScrollIndicator={false}
//                 inverted={true}
//               />
//             </View>
//             <View style={styles.bottom}>
//               <TextInput
//                 placeholder={'Write a comment...'}
//                 style={styles.input}
//                 value={textInput}
//                 onChangeText={setTextInput}
//                 multiline={true}
//               />
//               <Touchable
//                 leftImage={IMG.sender2}
//                 buttonstyle={styles.buttonstyle}
//                 onPress={sendMessage}
//               />
//             </View>
//           </ImageBackground>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   innerContainer: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: mvs(20),
//     marginVertical: mvs(20),
//   },
//   headerinside: {
//     flexDirection: 'row',
//     gap: mvs(20),
//     alignItems: 'center',
//   },
//   image1: {
//     width: mvs(50),
//     height: mvs(50),
//   },
//   live: {
//     backgroundColor: 'red',
//     width: '20%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: mvs(17),
//     borderRadius: mvs(5),
//   },
//   text1: {
//     fontSize: mvs(18),
//     color: colors.white,
//     fontWeight: '400',
//   },
//   text2: {
//     fontSize: mvs(12),
//     color: colors.black,
//     fontWeight: '400',
//   },
//   flatlistcontainer: {
//     flex: 1,  // Ensure the FlatList container takes up available space
//     padding: mvs(10),
//     marginBottom: mvs(60), // Adjust if needed
//   },
//   bottom: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: mvs(10),
//     backgroundColor: colors.white,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: colors.white,
//     borderWidth: mvs(1),
//     borderColor: colors.lightdark,
//     borderRadius: mvs(30),
//     paddingHorizontal: mvs(20),
//     minHeight: mvs(45),
//   },
//   buttonstyle: {
//     width: mvs(46),
//     height: mvs(46),
//     backgroundColor: colors.lightblue,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: mvs(26),
//     marginLeft: mvs(10),
//   },
//   buttonstyle2: {
//     width: mvs(46),
//     height: mvs(46),
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 0,
//   },
//   image2: {
//     width: mvs(43),
//     height: mvs(43),
//   },
//   messageText: {
//     color: colors.black,
//     fontSize: mvs(14),
//     textAlign: 'left',
//     fontWeight: '400',
//   },
//   messageContainer1: {
//     alignSelf: 'flex-start',
//     marginBottom: mvs(10),
//     flexDirection: 'row',
//     gap: mvs(15),
//     backgroundColor: 'rgba(255, 255, 255, 0.5)',
//     borderRadius: mvs(79),
//     maxWidth: '70%',
//     minWidth: '25%',
//     borderWidth: mvs(2),
//     borderColor: colors.lightdark,
//     marginHorizontal: mvs(20),
//     alignItems: 'center',
//     marginVertical: mvs(5),
//   },
//   messageBubble2: {
//     maxWidth: '70%',
//     minWidth: '25%',
//     paddingRight: mvs(8),
//   },
// });

// export default DirectorLiveComments;
