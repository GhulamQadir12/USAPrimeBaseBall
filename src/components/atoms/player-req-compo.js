import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Item = ({item, onPress}) => {
  return (
    <View style={{marginBottom:mvs(15)}}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text2}> Player Name</Text>
          <View style={styles.imagecontainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text4}>{item.name}</Text>
          </View>
          <Text style={styles.text3}>See info...</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.iconmaincontainer}>
        <View style={styles.iconcontainer}>
          <Ionicons
            name="checkmark-done-sharp"
            size={mvs(25)}
            color={colors.white}
          />
        </View>
        <View style={styles.iconcontainer2}>
          <Entypo name="cross" size={mvs(25)} color={colors.white} />
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  imagecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: mvs(10),
    marginTop:mvs(12)
  },
  container: {
    marginVertical: mvs(30),
    borderRadius:mvs(5),
    backgroundColor: colors.white,
    padding: mvs(20),
    gap: mvs(0),
    hadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 10,
    margin:mvs(8)
    // flex:1
  },
  text: {
    color: colors.black,
    fontSize: mvs(18),
    fontFamily: 'Nunito',
  },
  text4: {
    color: colors.black,
    fontSize: mvs(14),
    fontFamily: 'Nunito-Bold',
    fontWeight:'400',

  },
  text2: {
    color: colors.black,
    fontSize: mvs(12),
    fontFamily: 'Nunito-Regular',
    fontWeight: '600',
  },
  text3: {
    color: colors.black,
    fontSize: mvs(14),
    fontFamily: 'Nunito-Regular',
    alignSelf: 'flex-end',
  },
  image: {
    width: mvs(30),
    height: mvs(30),
  },
  iconcontainer: {
    backgroundColor: colors.green,
    width: mvs(36),
    height: mvs(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mvs(30),
  },
  iconcontainer2: {
    backgroundColor: 'red',
    width: mvs(36),
    height: mvs(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mvs(30),
  },
  iconmaincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: mvs(10),
  },
});
