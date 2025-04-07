import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './style';
import Item from '../../components/atoms/playerhomechat-card';
import * as IMG from '../../assets/images/images';
import { mvs } from '../../config/metrices';

const PlayerChatSystemChat = ({navigation}) => {

  const DATA = [
    {
      id: '0',
      img: IMG.playercoach,
      time: '12:00 PM',
      title: 'Coach',
      des: 'Hi ther hope your doing well  iam there tver 2000 years old. '
    },
    {
      id: '1',
      img: IMG.playerdirector,
      time: '12:00 PM',
      title: 'Director',
      des: 'Hi ther hope your doing well  iam there to help you in any situation!'
    },
    {
      id: '2',
      img: IMG.playerdirector,
      time: '12:00 PM',
      title: 'Director',
      des: 'Hi ther hope your doing well  iam there to help you in any situation!'
    },
    {
      id: '3',
      img: IMG.playerdirector,
      time: '12:00 PM',
      title: 'Director',
      des: 'Hi ther hope your doing well  iam there to help you in any situation!'
    },
    {
      id: '4',
      img: IMG.playerdirector,
      time: '12:00 PM',
      title: 'Director',
      des: 'Hi ther hope your doing well  iam there to help you in any situation!'
    },
    {
      id: '5',
      img: IMG.playercoach,
      time: '12:00 PM',
      title: 'Coach',
      des: 'Hi ther hope your doing well  iam there tver 2000 years old. '
    },
    {
      id: '6',
      img: IMG.playercoach,
      time: '12:00 PM',
      title: 'Coach',
      des: 'Hi ther hope your doing well  iam there tver 2000 years old. '
    },
    {
      id: '7',
      img: IMG.playercoach,
      time: '12:00 PM',
      title: 'Coach',
      des: 'Hi ther hope your doing well  iam there tver 2000 years old. '
    },
    {
      id: '8',
      img: IMG.playercoach,
      time: '12:00 PM',
      title: 'Coach',
      des: 'Hi ther hope your doing well  iam there tver 2000 years old. '
    },

  ];

  const RenderItem = ({item}) => 
    <Item
      item={item}
      navigation={navigation} 
    />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logocontainer}>
          <Image
            resizeMode="contain"
            style={styles.image2}
            source={IMG.splash}
          />
          <Text style={styles.text}>USA Prime Baseball</Text>
        </View>
        <Image resizeMode="contain" style={styles.image} source={IMG.user} />
      </View>
      <View style={styles.flatlistcontainer}>
        <FlatList 
          data={DATA} 
          renderItem={RenderItem}
          keyExtractor={item => item.id} 
          contentContainerStyle={{paddingBottom:mvs(100)}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default PlayerChatSystemChat;
