import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as IMG from '../../assets/images/images';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import Touchable from './button';

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.liveimg}>
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode="stretch"
          />
          {/* <Touchable
            buttonstyle={styles.buttonstyle}
            leftImage={IMG.wireless2}
            title={'Live'}
            firstcontainer={styles.firstcontainer}
          /> */}
          <View style={styles.buttonstyle}>
            <Image 
                source={IMG.wireless2}
                // resizeMode='contain'
            />
            <Text style={{color:colors.white,fontSize:mvs(15)}}>Live</Text>
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.descontainer}>
            <Image
              source={item.image2}
              style={styles.badgeImage}
              resizeMode="contain"
            />
            <Text style={styles.cardTitle}>{item.name}</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', gap: mvs(5)}}>
            <Feather name="eye" size={24} color={colors.black} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.viewersText}>{item.viewers}</Text>
              <Text style={styles.viewersText}>Watcing</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  buttonstyle: {
    position: 'absolute',
    // alignSelf:'flex-end',
    margin: mvs(10),
    right: mvs(10),

    // maxWidth:'20%',
    width: '20%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.red,
    borderRadius:mvs(13),
    flexDirection:'row',
    alignItems: 'center',
    gap: mvs(10),
    justifyContent: 'center',
  },
  firstcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(10),
    justifyContent: 'center',
  },
  card: {
    marginVertical: mvs(10),
    borderRadius: mvs(8),
    backgroundColor: colors.white,
    // elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: mvs(210),
  },
  cardDetails: {
    padding: 5,
    // backgroundColor:'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descontainer: {
    // position: 'absolute',
    // top: 10,
    // right: 10,
    // backgroundColor: 'red',
    // paddingVertical: 5,
    // paddingHorizontal: 10,
    borderRadius: mvs(5),
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(10),
    maxWidth: '60%',
    flex: 1,
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: mvs(16),
    fontWeight: 'bold',
    marginVertical: 5,
  },
  viewersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewersText: {
    marginLeft: mvs(4),
  },
  liveimg: {
  },
});
