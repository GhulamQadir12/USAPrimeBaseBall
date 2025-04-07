import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const Item = ({item}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>{item.startTime}</Text>
        <Text style={styles.text}>{item.endTime}</Text>
      </View>
      <View style={styles.descontainer}>
        <View style={styles.desinsidecontainer}>
          <Text style={styles.text}>{item.des}</Text>
        </View>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    gap: mvs(20),
    marginTop: mvs(15),
    alignItems: 'center',
  },
  textcontainer: {
    gap: mvs(12),
  },
  text: {
    color: '#A7A7A7',
    fontSize: mvs(12),
    fontFamily: 'Nunito-Bold',
    fontWeight: '400',
  },
  descontainer: {
    borderLeftWidth: 2,
    borderLeftColor: colors.red,
    paddingHorizontal: mvs(10),
    flexGrow: 1,
    flex: 1,
  },
  desinsidecontainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    padding: mvs(5),
    // backgroundColor:'red'
  },
});
