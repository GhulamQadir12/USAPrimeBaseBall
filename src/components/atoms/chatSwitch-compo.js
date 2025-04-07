import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import LinearGradient from 'react-native-linear-gradient';


const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            gap: mvs(10),
            flexGrow: 1,
            alignItems: 'center',
          }}>
          <Image source={item.image} style={styles.image} />
          <View style={{gap: 4, flexGrow: 1, flex: 1}}>
            <View style={styles.descontainer}>
              <View style={{maxWidth:'78%'}}>
                <Text style={[styles.text, styles.text1]}>{item.name}</Text>
              </View>
              <Text style={[styles.text2]}>{item.title}</Text>
            </View>
            <Text style={[styles.text2]}>{item.des}</Text>
          </View>
        </View>
        <View style={styles.timercontainer}>
          <Text style={[styles.text, styles.text2]}>{item.time}</Text>
          <>
            {item.no_message_icon && (
              <LinearGradient
          colors={['#FF0038', '#0600FF']}
          style={styles.numbercontainer}
          start={{x: 0.65, y: 0.25}}>
            <Text style={{color:colors.white,fontSize:mvs(10)}}>{item.no_message_icon}</Text>
            </LinearGradient>
            )}
          </>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: colors.lightdark,
    flex: 1,
    justifyContent: 'space-between',
    marginTop: mvs(18),
    paddingVertical: mvs(5),
  },
  descontainer: {
    flexDirection: 'row',
    gap: mvs(10),
    alignItems: 'center',
    // backgroundColor: 'pink',
    flex: 1,
  },
  timercontainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: 'green',
  },
  image2: {
    width: mvs(16),
    height: mvs(16),
  },
  image: {
    width: mvs(43.48),
    height: mvs(43.48),
    borderRadius:mvs(15)
  },
  text: {
    color: colors.black,
    fontFamily: 'Nunito-Black',
  },
  text1: {
    fontSize: mvs(16),
  },
  text2: {
    fontSize: mvs(12),
    color: '#A8A8A8',
    fontFamily: 'Nunito-Bold',
  },
  numbercontainer:{
    width:'40%',
    height:'40%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:mvs(10)
  }
});
