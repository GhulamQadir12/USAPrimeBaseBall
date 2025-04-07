import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import LinearGradient from 'react-native-linear-gradient';

const Item = ({ item, onPress, backgroundColor, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={backgroundColor}
        style={styles.container}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
        <Text style={{ ...styles.text, color }}>{item.date}</Text>
        <Text style={{ ...styles.text, color }}>{item.day}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: mvs(58),
    height: mvs(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: mvs(5),
    borderRadius: mvs(10),
    borderWidth: mvs(1),
    borderColor: colors.lightdark,
  },
  text: {
    fontSize: mvs(16.5),
    fontFamily:'Nunito-Bold',
    color: colors.black,
    fontWeight:'600'
  },
});
