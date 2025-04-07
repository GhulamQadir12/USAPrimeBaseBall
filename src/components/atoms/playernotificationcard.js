import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mvs } from '../../config/metrices'
import { colors } from '../../config/colors'


export const Item = ({item}) => {
  return (
      <View style={styles.notifycontainer}>
        <Text style={styles.text3}>{item.type}</Text>
        <Text style={styles.text4}>{item.time}</Text>
      </View> 
  )
}
export const ItemWeakly = ({item}) => {
  return (
      <View style={styles.notifycontainer}>
        <Text style={styles.text3}>{item.type}</Text>
        <Text style={styles.text4}>{item.time}</Text>
      </View> 
  )
}
// box-shadow: 0px 0px 3px 0px #163CCC40;

const styles = StyleSheet.create({
  notifycontainer:{
    borderWidth:mvs(1),
    borderColor:'#163CCC40',
    borderRadius:mvs(10),

//     shadowColor: "red",
// shadowOffset: {
// 	width: 0,
// 	height: 0,
// },
// shadowOpacity: 0.25,
// shadowRadius: 0,

    // elevation:3,
    paddingVertical:mvs(15),
    paddingHorizontal:mvs(15),
    marginTop:mvs(13),
    gap:mvs(13)
  },
  text3:{
    color:colors.black,
    fontSize:mvs(14),
    fontWeight:'400',
    fontFamily:'Nunito-Bold'

  },
  text4:{
    color:'#00000075',
    fontSize:mvs(12),
    fontWeight:'400',
    fontFamily:'Nunito-black'

  },

})
