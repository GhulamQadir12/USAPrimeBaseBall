import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import Item from '../../components/atoms/chatSwitch-compo';
import * as IMG from '../../assets/images/images';
import Touchable from '../../components/atoms/button';

const DirectorSwitchChat = ({navigation}) => {
  const [swicher , setSwitcher] = React.useState(true)

  const Data =[
    {
      id:0,
      name:'Marry Willam ',
      title:'(Director)',
      image:IMG.playercoach,
      des:'Hi there hope your doing well.',
      time:'9:11 am',
      no_message_icon:3
    },
    {
      id:1,
      name:'Marry Willam',
      title:'',
      image:IMG.playercoach,
      des:'Hi there hope your doing well.',
      time:'9:11 am',
      no_message_icon:5
    },
    {
      id:2,
      name:'Marry Willam',
      title:'(Coach)',
      image:IMG.playercoach,
      des:'Hi there hope your doing well.',
      time:'9:11 am',
      no_message_icon:null
    },
    {
      id:3,
      name:'Marry Willam',
      title:'(Coach)',
      image:IMG.playercoach,
      des:'Hi there hope your doing well.',
      time:'9:11 am',
      no_message_icon:15
    },
    {
      id:4,
      name:'Marry Willam',
      title:'(Coach)',
      image:IMG.playercoach,
      des:'Hi there hope your doing well.',
      time:'9:11 am',
      no_message_icon:null
    },
    {
      id:5,
      name:'Marry Willam',
      title:'(Coach)',
      image:IMG.playercoach,
      des:'Hi there hope your doing well.',
      time:'9:11 am',
      no_message_icon:1
    },
  ]

  const Data2 =[
    {
      id:0,
      name:'Players',
      title:'(Director)',
      image:IMG.group,
      des:'Team Players',
      time:'9:11 am',
      no_message_icon:5
    },
    {
      id:1,
      name:'Marry Willam',
      title:'',
      image:IMG.playercoach,
      des:'Hi there hope your doing well.',
      time:'9:11 am',
      no_message_icon:9
    },]

  const RenderItem = ({item}) => (
    <Item item={item} 
      onPress={()=>navigation.navigate('DirectorChat')}
    />
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logocontainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={IMG.splash}
          />
          <Text style={styles.text}>USA Prime Baseball</Text>
        </View>
        <View style={styles.iconscontainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('CoachPlayerListing')}>
          <Image source={IMG.user} 
            resizeMode="contain"
            style={styles.image1}
          />
          </TouchableOpacity>
           <Image source={IMG.search} 
            resizeMode="contain"
            style={styles.image1}
          />
        </View>
      </View>
      <View style={styles.switchcontainer}>
        <Touchable title={'Chats'} buttonstyle={{...styles.buttonstyle,  backgroundColor: swicher ? 'rgba(28, 49, 102, 1)' : 'rgba(28, 49, 102, 0)'}} onPress={()=>setSwitcher(true)}/>
        <Touchable title={'Groups'} buttonstyle={{...styles.buttonstyle,backgroundColor: swicher ? 'rgba(28, 49, 102, 0)' : 'rgba(28, 49, 102, 1)'}} onPress={()=>setSwitcher(false)}/>
      </View>
      <>
      { swicher ?
      <FlatList 
        data={Data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
      : <FlatList 
        data={Data2}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
      }
      </>
    </View>
  );
};

export default DirectorSwitchChat;
