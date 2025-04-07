import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Item from '../../components/atoms/playerhome-card';
import { mvs } from '../../config/metrices';
import { useSelector } from 'react-redux';

const PlayerChatHome = ({ navigation }) => {
  const profileFirebaseData = useSelector(state => state.get_data_reducer);
console.log('getting from firebase:',profileFirebaseData)
  const DATA = [
    {
      id: '0',
      img: IMG.playercoach,
      name: 'John Inglis',
      title: 'Coach',
    },
    {
      id: '1',
      img: IMG.playerdirector,
      name: 'Mark Anthony',
      title: 'Director',
    },
    {
      id: '2',
      img: IMG.playerdirector,
      name: 'Mark Anthony',
      title: 'Director',
    },
    {
      id: '3',
      img: IMG.playerdirector,
      name: 'Mark Anthony',
      title: 'Director',
    },
    {
      id: '4',
      img: IMG.playerdirector,
      name: 'Mark Anthony',
      title: 'Director',
    },
    {
      id: '5',
      img: IMG.playerdirector,
      name: 'Mark Anthony',
      title: 'Director',
    },
    {
      id: '6',
      img: IMG.playerdirector,
      name: 'Mark Anthony',
      title: 'Director',
    },
    {
      id: '7',
      img: IMG.playerdirector,
      name: 'Mark Anthony',
      title: 'Director',
    },
  ];

  const RenderItem = ({ item }) => <Item item={item} navigation={navigation} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Entypo
            name={'menu'}
            size={30}
            color="#aaa"
            // style={styles.icon}
          />
        </TouchableOpacity>
        <Image resizeMode="contain" style={styles.image} source={IMG.splash} />
        <TouchableOpacity onPress={() => {
          navigation.navigate('PlayerProfile');
        }}>
          <Image
            resizeMode="contain"
            style={styles.image2}
            source={IMG.playerprofile}
          />
        </TouchableOpacity>
      </View>
      {/* <View  style={{marginBottom:mvs(50)}}> */}
      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:mvs(100)}}
      />
      {/* </View> */}
    </View>
  );
};

export default PlayerChatHome;
