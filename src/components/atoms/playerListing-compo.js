import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Touchable from './button';
import * as IMG from '../../assets/images/images'

const Item = ({item}) => {
  return (
    <View style={styles.container}>
       <Image 
        source={item.image}
        style={styles.image}
        resizeMode='contain'
       />
      <View style={styles.textcontainer}>
      <Text style={[styles.text,styles.text1]}>{item.name}</Text>
      </View>
      <Text style={[styles.text,styles.text2]}>({item.status})</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(10),
    marginTop: mvs(30),
    // backgroundColor:'red',
    flex:1,

  },
  text:{
    fontFamily:'Nunito-Regular',
    color:colors.black,
    // flex:1
  },
  text1:{
    fontSize:mvs(16),
    fontWeight:'700',
    // flex:1
  },
  text2:{
    fontSize:mvs(12),
    fontWeight:'400'
  },
  textcontainer:{
    maxWidth:'70%',
    justifyContent:'space-evenly'
  
  },
  image:{
    width:mvs(45),
    height:mvs(45)
  }

});
