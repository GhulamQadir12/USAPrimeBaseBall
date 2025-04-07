import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as IMG from '../../assets/images/images';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {mvs} from '../../config/metrices';
import { colors } from '../../config/colors';
import styles from './style';
import Item from '../../components/atoms/live-stream-compo';
import DateTimeModal from '../../components/atoms/dateTimePicker-compo';
const data = [
  {
    id: '1',
    name: 'Joshua Little',
    image: IMG.livepic,
    viewers: '30k',
    image2: IMG.playercoach,
  },
  {
    id: '2',
    name: 'Jhon Doe',
    image: IMG.live1,
    viewers: '30k',
    image2: IMG.receiver,
  },
  {
    id: '3',
    name: 'Joshua Little',
    image: IMG.livepic,
    viewers: '30k',
    image2: IMG.playercoach,
  },
];

const PlayerLive = ({navigation}) => {

    const renderItem = ({item}) => (
        <Item 
            item={item}
            onPress={()=>navigation.navigate('PlayerLiveComments')}
        />
    )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}  onPress={()=>{
        }}>

          <Fontisto name="date" size={24} color="red" />
        </TouchableOpacity>
        <Image source={IMG.splash} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity style={styles.profileButton} onPress={()=>navigation.navigate('PlayerProfile')}>
          <Image
            source={IMG.playerprofile}
            style={styles.profileIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


export default PlayerLive;
