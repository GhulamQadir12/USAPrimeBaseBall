import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';

const PlayerItem = ({item, onPress}) => {
  return (
    <Swiper style={styles.wrapper} autoplay={true} loop={true}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Plyer Info</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.mainlist}>
            <View style={styles.listcontainer}>
              <Entypo name={'dot-single'} size={30} color={colors.black} />
              <Text style={styles.text2}>{item.personal}</Text>
            </View>
            <View style={styles.listcontainer}>
              <Entypo name={'dot-single'} size={30} color={colors.black} />
              <Text style={styles.text2}>{item.physic}</Text>
            </View>
          </View>
          <View style={styles.mainlist}>
            <View style={styles.listcontainer}>
              <Entypo name={'dot-single'} size={30} color={colors.black} />
              <Text style={styles.text2}>{item.sport}</Text>
            </View>
            <View style={styles.listcontainer}>
              <Entypo name={'dot-single'} size={30} color={colors.black} />
              <Text style={styles.text2}>{item.uniform}</Text>
            </View>
          </View>
          <Text style={{...styles.text2,fontWeight:'600',color:'#AE9B9B',marginTop:mvs(15)}}>Player Name</Text>
          <View style={styles.imagecontainer}>
            <Image source={item.image} style={styles.image} />
            <View style={{flex: 1}}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  container: {
    // width: '60%',
    // height: mvs(174),
    backgroundColor: colors.white,
    // flex:1,
    marginHorizontal: mvs(10),
    borderRadius: mvs(10),
    borderWidth: mvs(1),
    borderColor: colors.lightdark,
    justifyContent: 'space-between',
    padding: mvs(12),
    gap: mvs(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    fontSize: mvs(17.5),
    fontFamily:'Nunito-Bold',
    color: colors.black,
    fontWeight: '400',
  },
  text2: {
    fontSize: mvs(12.5),
    fontFamily:'Nunito-Bold',
    color: colors.black,
    fontWeight: '400',
  },
  wrapper: {
    // backgroundColor:'red',
    width: mvs(250),
    gap: mvs(40),
    height: mvs(220),
    marginTop: mvs(15),
  },
  listcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    // backgroundColor:'red'
  },
  mainlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: mvs(15),
    // backgroundColor:'green',
    gap: mvs(10),
  },
  imagecontainer: {
    flexDirection: 'row',
    // backgroundColor:'green',
    alignItems: 'center',
    gap: mvs(15),
    // flexGrow:1,
    // marginVertical:mvs(5)
  },
  image: {
    marginTop: mvs(5),
    width: mvs(50),
    height: mvs(50),
  },
});
