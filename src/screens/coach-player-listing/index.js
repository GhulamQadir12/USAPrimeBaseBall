import { View, Text,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import * as IMG from '../../assets/images/images'
import styles from './style'
import Item from '../../components/atoms/playerListing-compo'

const CoachPlayerListing = ({navigation}) => {

const players =[
  {
    id:0,
    image:IMG.playercoach,
    name:'John Doe',
    status:'Director'
  },
  {
    id:1,
    image:IMG.playercoach,
    name:'John Doe',
    status:'Coach'
  },
  {
    id:2,
    image:IMG.playercoach,
    name:'John Doe',
    status:'Director'
  },
]

  const RenderItem = ({item}) => (
    <Item item={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image source={IMG.back} style={styles.image} resizeMode='contain'/>
        </TouchableOpacity>
        <Image source={IMG.splash} style={styles.image1} resizeMode='contain'/>
        <Image source={IMG.search} style={styles.image} resizeMode='contain'/>
      </View>
      <FlatList 
        data={players}
        keyExtractor={item=>item.id}
        renderItem={RenderItem}
        />
    </View>
  )
}

export default CoachPlayerListing