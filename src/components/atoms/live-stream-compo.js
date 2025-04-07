import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as IMG from '../../assets/images/images';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {mvs} from '../../config/metrices';
import { colors } from '../../config/colors';
import Touchable from './button';


const Item = ({item,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
    <View style={styles.liveimg}>
    <Image source={item.image} style={styles.cardImage} resizeMode='stretch'/>
    {/* <TouchableOpacity style={styles.buttonstyle}>
      <Text>L1ve</Text>
    </TouchableOpacity> */}
    <View style={styles.buttonstyle}>
            <Image 
                source={IMG.wireless2}
                // resizeMode='contain'
            />
            <Text style={{color:colors.white,fontSize:mvs(15)}}>Live</Text>
          </View>
    </View>
    <View style={styles.cardDetails}>
      <View style={styles.descontainer}>
        <Image
          source={item.image2}
          style={styles.badgeImage}
          resizeMode="contain"
        />
        <Text style={styles.cardTitle}>{item.name}</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',gap:mvs(5)}}>
      <Feather name="eye" size={24} color={colors.black} />
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.viewersText}>{item.viewers}</Text>
        <Text style={styles.viewersText}>Watcing</Text>
        </View>
      </View>
    </View>
  </View>
  </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
  buttonstyle: {
    position: 'absolute',
    // alignSelf:'flex-end',
    margin: mvs(10),
    right: mvs(10),

    // maxWidth:'20%',
    width: '20%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.red,
    borderRadius:mvs(13),
    flexDirection:'row',
    alignItems: 'center',
    gap: mvs(10),
    justifyContent: 'center',
  },
  firstcontainer:{flexDirection:'row',
    alignItems:'center',
    gap:mvs(10),
    justifyContent:'center',
  },
    card: {
      marginVertical: mvs(10),
      borderRadius: mvs(8),
      backgroundColor: colors.white,
      // elevation: 3,
    },
    cardImage: {
      width: '100%',
      height: mvs(210),
    },
    cardDetails: {
      padding: 5,
      // backgroundColor:'yellow',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    descontainer: {
      // position: 'absolute',
      // top: 10,
      // right: 10,
      // backgroundColor: 'red',
      // paddingVertical: 5,
      // paddingHorizontal: 10,
      borderRadius: mvs(5),
      flexDirection: 'row',
      alignItems: 'center',
      gap: mvs(10),
      maxWidth: '60%',
      flex: 1,
    },
    liveText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    cardTitle: {
      fontSize: mvs(16),
      fontWeight: 'bold',
      marginVertical: 5,
    },
    viewersContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    viewersText: {
      marginLeft: mvs(4),
    },
    liveimg:{

    }
})

// import React, { useRef, useEffect, useState } from 'react';
// import { FlatList, View, Text, StyleSheet } from 'react-native';

// const SmoothAutoScrollingFlatList = () => {
//   const data = [
//     { id: '1', title: 'Item 1' },
//     { id: '2', title: 'Item 2' },
//     { id: '3', title: 'Item 3' },
//     { id: '4', title: 'Item 4' },
//     { id: '5', title: 'Item 5' },
//   ];

//   const flatListRef = useRef(null);
//   const [scrollOffset, setScrollOffset] = useState(0);
//   const [isUserScrolling, setIsUserScrolling] = useState(false);
//   const ITEM_WIDTH = 200;
//   const SCROLL_SPEED = 1; 
//   const SCROLL_INTERVAL_MS = 16; 

//   useEffect(() => {
//     if (!isUserScrolling) {
//       const scrollInterval = setInterval(() => {
//         smoothScroll();
//       }, SCROLL_INTERVAL_MS); 

//       return () => clearInterval(scrollInterval);
//     }
//   }, [scrollOffset, isUserScrolling]);

//   const smoothScroll = () => {
//     if (flatListRef.current) {
//       let newOffset = scrollOffset + SCROLL_SPEED;

//       if (newOffset > data.length * ITEM_WIDTH) {
//         newOffset = 0;
//       }

//       flatListRef.current.scrollToOffset({ offset: newOffset, animated: false });

//       setScrollOffset(newOffset);
//     }
//   };

//   const handleScrollBegin = () => {
//     setIsUserScrolling(true);
//   };

//   const handleScrollEnd = () => {
//     setTimeout(() => {
//       setIsUserScrolling(false);
//     }, 2000); 
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       ref={flatListRef}
//       data={data}
//       keyExtractor={(item) => item.id}
//       renderItem={renderItem}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       onScrollBeginDrag={handleScrollBegin} 
//       onMomentumScrollEnd={handleScrollEnd} 
//       pagingEnabled
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     width: 200, 
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ccc',
//     marginHorizontal: 10,
//   },
//   title: {
//     fontSize: 20,
//     color: 'black',
//   },
// });

// export default SmoothAutoScrollingFlatList;




// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet } from 'react-native';

// const App = () => {
//   const [text, setText] = useState('');

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         multiline={true}
//         onChangeText={setText}
//         value={text}
//         placeholder="Type here..."
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     borderColor: 'gray',
//     borderWidth: 1,
//     padding: 10,
//     minHeight: 40, // Minimum height of the TextInput
//     textAlignVertical: 'top', // To align text at the top
//   },
// });

// export default App;
