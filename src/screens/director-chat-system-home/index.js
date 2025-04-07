import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Item from '../../components/atoms/directorPlayerHome';
import { mvs } from '../../config/metrices';

const DirectorChatHome = ({ navigation }) => {
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
    <ScrollView contentContainerStyle={styles.container} style={{flex:1}} showsVerticalScrollIndicator={false}>
    {/* <View style={styles.container}> */}
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
          navigation.navigate('DirectorProfile');
        }}>
          <Image
            resizeMode="contain"
            style={styles.image2}
            source={IMG.playerprofile}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infocontainer}>
        <Text style={styles.text1}>Hi Jhon</Text>
        <Text style={styles.text2}>Welcome to USA Prime Baseball</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:mvs(100)}}
      />
    {/* </View> */}
    </ScrollView>
  );
};

export default DirectorChatHome;
