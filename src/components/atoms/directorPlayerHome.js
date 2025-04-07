import React from 'react';
import {View, StyleSheet, Text, StatusBar, Image} from 'react-native';
import * as IMG from '../../assets/images/images';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import Touchable from './button';

const Item = ({item,navigation}) => (
    <View style={styles.item}>
      <View style={styles.insidecontainer}>
        <Image style={styles.profileimg} source={item.img} />
        <View style={styles.textcontainer}>
          <Text style={[styles.text,styles.text2]}>{item.name}</Text>
          <Text style={[styles.text,styles.text3]}>{item.title}</Text>
        </View>
      </View>
      <Touchable
        title={'Chat'}
        image={styles.image}
        buttonstyle={styles.buttonstyle}
        icon={IMG.chat}
        textStyle={[styles.textStyle,styles.text]}
        onPress={() => {
      navigation.navigate('DirectorChat');
    }}
      />
    </View>
);

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    justifyContent:'space-between',
    top: mvs(35),
    backgroundColor: '#fff',
    padding: mvs(19),
    marginVertical: mvs(8),
    marginHorizontal: mvs(5),
    elevation: mvs(8),
    // borderWidth: mvs(2),
    flexDirection: 'row',
    borderRadius: mvs(10),
    marginTop: mvs(10),
  },
  insidecontainer: {
    flexDirection: 'row',
    flex:0.8
  },
  text:{
    fontFamily:'Nunito-Bold'
  },
  text2:{
    fontSize:mvs(18),
    fontWeight:'700',
    color:colors.black,
    fontFamily:'Nunito-Bold'

  },
  text3:{
    fontSize:mvs(14),
    fontWeight:'600',
    color:colors.black,
    fontFamily:'Nunito-Bold'


  },
  buttonstyle: {
    // flex:1,
    backgroundColor: '#fff',
    width: mvs(70),
    height: mvs(45),
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'flex-end',
    marginTop: mvs(10),
    elevation: 0,
    padding:0,
  },
  profileimg: {
    width: mvs(54),
    height: mvs(54),
  },
  textcontainer: {
    marginHorizontal: mvs(10),
    flexGrow:1,
    gap:mvs(7)
  },
  title: {
    fontSize: mvs(18),
    color: colors.black,
  },
  //   chatcontainer:{
  //     flexDirection:'row',
  //     alignItems:'center',
  //     // width:mvs(100)
  //   },
  image: {
    width: mvs(20),
    height: mvs(20),
    // marginLeft:mvs(5)
  },
  textStyle: {
    fontSize: mvs(12),
    color: colors.black,
    marginTop: mvs(10),
    fontWeight:'400'
  },
});

export default Item;
