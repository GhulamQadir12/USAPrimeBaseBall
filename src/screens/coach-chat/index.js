import {View, Text, Image, FlatList, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../../components/atoms/button';
import Textinput from '../../components/atoms/textinput';
import Item from '../../components/atoms/peronalchat-compo';
import LinearGradient from 'react-native-linear-gradient';
import {launchImageLibrary} from 'react-native-image-picker';

const CoachChat = ({navigation}) => {
  const [textInput, setTextInput] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [profileImageUri, setProfileImageUri] = useState(null);
  const [coverImageUri, setCoverImageUri] = useState(null);

  const pickImage = setImageUri => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image Picker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const renderItem = ({item}) => (
    <View>
      <View style={styles.messageContainer}>
        <LinearGradient
          colors={['#0600FF', '#FF0038']}
          style={styles.lineragradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <Text style={styles.messageText2}>{item.text}</Text>
        </LinearGradient>
        <Image source={IMG.sender} style={styles.image2} />
      </View>
      <View style={styles.messageContainer1}>
        <Image source={IMG.receiver} style={styles.image2} />
        <View style={styles.messageBubble2}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      </View>
    </View>
  );

  const sendMessage = () => {
    if (textInput.trim()) {
      setMessages([...messages, {text: textInput, id: Date.now().toString()}]);
      setTextInput('');
    }
  };

  const Renderitem = item => <Item item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Touchable
          leftImage={IMG.back}
          buttonstyle={styles.buttonstyle2}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Chat</Text>
      </View>
      <View style={styles.flatlistcontainer}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          // initialScrollIndex={messages.length - 1}
        />
      </View>
      <View style={styles.bottom}>
        <Touchable
          leftImage={IMG.plus}
          buttonstyle={styles.buttonstyle}
          onPress={() => pickImage(setProfileImageUri)}
        />
        <TextInput
          placeholder={'Type Here'}
          style={styles.input}
          value={textInput}
          onChangeText={setTextInput}
          multiline={true}
        />
        <Touchable
          leftImage={IMG.send}
          buttonstyle={styles.buttonstyle}
          onPress={sendMessage}
        />
      </View>
    </View>
  );
};

export default CoachChat;
