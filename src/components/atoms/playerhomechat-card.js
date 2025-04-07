import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import * as IMG from '../../assets/images/images';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const Item = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('PlayerChatSystemPersonChat');
    }}
  >
    <View style={styles.container}>
      <Image style={styles.profileimg} source={item.img} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection: 'row', gap: mvs(7)}}>
          <Text style={styles.title2}>{item.time}</Text>
          <Text style={{...styles.title3,flex: 1}}>{item.des}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // padding: mvs(10),
    marginTop: mvs(22),
    borderRadius: mvs(10),
    gap: mvs(10),
  },
  profileimg: {
    width: mvs(50),
    height: mvs(50),
  },
  descriptionContainer: {
    flex: 1,
  },
  title: {
    color: colors.black,
    fontSize: mvs(16),
    fontWeight:'600',
    fontFamily:'Nunito-Black'

  },
  title2: {
    color: colors.black,
    fontSize: mvs(10),
    fontWeight:'400',
    fontFamily:'Nunito-Bold'

  },
  title3: {
    color: colors.textlightdark,
    fontSize: mvs(13),
    fontWeight:'400',
    fontFamily:'Nunito-Bold'

  },
});

export default Item;
