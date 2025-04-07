import {View, Text,FlatList, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import {Item} from '../../components/atoms/playernotificationcard';
import {ItemWeakly} from '../../components/atoms/playernotificationcard';
import { mvs } from '../../config/metrices';

const PlayerChatSystemNotification = () => {
 const  dailyNotification =[
    {
      id:0,
      type:'System Notification',
      time:'12 min ago'
    },
    {
      id:1,
      type:'System Notification',
      time:'12 min ago'
    },
    {
      id:2,
      type:'Jacik Plonchai',
      time:'12 min ago'
    },
    {
      id:3,
      type:'System Notification',
      time:'12 min ago'
    },
    {
      id:4,
      type:'Jacik Plonchai',
      time:'12 min ago'
    },
  ]
  const  weaklyNotification =[
    {
      id:0,
      type:'System Notification',
      time:'1 day ago'
    },
  ]

  const RenderItem = ({item})=>
    <Item item={item}/>

  const RenderItemWeakly = ({item})=>
    <ItemWeakly item={item} />
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Notification</Text>
      </View>
      <Text style={styles.text2}>Today</Text>
     <View>
      <FlatList data={dailyNotification} 
      renderItem={RenderItem}
      keyExtractor={item => item.id} />
      </View>
      <Text style={styles.text2}>
        This weak
      </Text>
      <View style={{paddingBottom:mvs(20)}}>
      <FlatList data={weaklyNotification} 
      renderItem={RenderItemWeakly}
      keyExtractor={item => item.id} />
      </View>
    </View>
    </ScrollView>
  );
};

export default PlayerChatSystemNotification;
