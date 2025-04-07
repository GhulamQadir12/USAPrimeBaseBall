import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../config/colors';
import Touchable from '../../components/atoms/button';
import { useWindowDimensions } from 'react-native';

export function useIsLandscape() {
  const { height, width } = useWindowDimensions();
  return width > height;
}

const LiveComments = () => {
  const [textInput, setTextInput] = useState('');
  const [show, setShow] = useState(true);
  const [messages, setMessages] = useState([
    { id: 0, text: 'Hello!' },
    { id: 1, text: 'How are you?' },
    { id: 2, text: 'I am good!' },
    { id: 3, text: 'How about you?' },
    { id: 4, text: 'Doing well, thanks!' },
    { id: 8, text: 'Hello!' },
    { id: 9, text: 'How are you?' },
    { id: 10, text: 'I am good!' },
    { id: 11, text: 'How about you?' },
    { id: 12, text: 'Doing well, thanks!' },
  ]);

  const flatListRef = useRef(null); // Reference for FlatList
  const scrollY = useRef(new Animated.Value(0)).current; // Scroll animation value

  const sendMessage = () => {
    if (textInput.trim()) {
      setMessages([...messages, { text: textInput, id: Date.now().toString() }]);
      setTextInput('');
    }
  };

  // Smooth scrolling logic with timing to make the scroll slower and readable
  const smoothScrollToBottom = (animated = true) => {
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: messages.length * 60, // approximate height per item
          animated: animated, // Only animate when needed
        });
      }
    }, 100); // Adjust timing for readability
  };

  // Smoothly scroll to the last message when new messages are added
  useEffect(() => {
    if (messages.length > 0) {
      smoothScrollToBottom();
    }
  }, [messages]);

  // Smooth scrolling with easing function on mount
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      Animated.timing(scrollY, {
        toValue: messages.length * 60, // approximate height per item
        duration: 3000, // Slow down scroll duration for smoothness
        easing: Easing.inOut(Easing.ease), // Smooth easing
        useNativeDriver: true,
      }).start();
    }, 5000); // Adjust timing to allow the user to read

    return () => clearInterval(scrollInterval);
  }, [messages]);

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.messageContainer1}>
        <Image source={IMG.commentator2} style={styles.image2} />
        <View style={styles.messageBubble2}>
          <Text style={{ ...styles.text2, color: '#2F2D2D' }}>John</Text>
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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMG.pic}
        resizeMode={useIsLandscape() ? 'stretch' : 'cover'}
        style={styles.image}
      >
        {show && (
          <View style={styles.header}>
            <View style={styles.headerinside}>
              <Image
                source={IMG.commentpic}
                style={styles.image1}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.text1}>John Doe</Text>
                <Text style={styles.text2}>2 hours ago</Text>
              </View>
              <View style={styles.live}>
                <Text style={{ ...styles.text2, color: colors.white }}>Live</Text>
              </View>
            </View>

            <Touchable
              icon2={<Entypo name="cross" size={25} color={colors.red} />}
              buttonstyle={styles.buttonstyle2}
              onPress={() => setShow(false)}
            />
          </View>
        )}

        <View style={styles.flatlistcontainer}>
          <FlatList
            ref={flatListRef} // Add reference to FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => smoothScrollToBottom()} // Scroll to bottom when content size changes
          />
        </View>

        <View style={styles.bottom}>
          <TextInput
            placeholder={'Write a comment...'}
            style={styles.input}
            value={textInput}
            onChangeText={setTextInput}
            multiline={true}
            numberOfLines={6}
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

export default LiveComments;
