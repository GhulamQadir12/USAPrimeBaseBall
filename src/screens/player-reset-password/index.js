import {View, Text, Image, Alert, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import PopUp from '../../components/atoms/popup';

const PlayerResetPassword = ({navigation}) => {
  // useEffect(() => {
  //   Alert.alert('iam ');
  //   <View>
  //     ;
  //   </View>;
  // }, []);
  return (
    <ScrollView style={{flex:1,backgroundColor:'red'}} contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    {/* <View style={styles.container}> */}
      <Image source={IMG.resetpic} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>Password Reset</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.text2}>
          Your Password has been reset sucessfully
        </Text>
        <PopUp navigation={navigation}/>
      </View>
    {/* </View> */}
    </ScrollView>
  );
};

export default PlayerResetPassword;
