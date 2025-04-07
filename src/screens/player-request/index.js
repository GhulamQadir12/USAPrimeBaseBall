import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Item from '../../components/atoms/player-req-compo';
import Touchable from '../../components/atoms/button';

const PlayerRequest = ({navigation}) => {
  const data = [
    {
      id: 0,
      name: 'Christiano Ronaldo',
      image: IMG.playerreq,
    },
    {
      id: 1,
      name: 'Christiano Ronaldo',
      image: IMG.playerreq,
    },
    {
      id: 2,
      name: 'Christiano Ronaldo',
      image: IMG.playerreq,
    },
    {
      id: 3,
      name: 'Christiano Ronaldo',
      image: IMG.playerreq,
    },
  ];

  const Renderitem = ({item}) => (
    <Item item={item} onPress={() => navigation.navigate('PlayerDetail')} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Touchable leftImage={IMG.back} buttonstyle={styles.buttonstyle2} onPress={()=>navigation.goBack()}/>
      <Text style={styles.text}>Player Request</Text>
      </View>
      <FlatList
        data={data}
        renderItem={Renderitem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PlayerRequest;
