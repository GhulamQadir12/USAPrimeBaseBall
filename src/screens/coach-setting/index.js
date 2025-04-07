import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Touchable from '../../components/atoms/button';

const CoachSetting = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.header}>
      <Touchable leftImage={IMG.back} buttonstyle={styles.buttonstyle2} onPress={()=>navigation.goBack()}/>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
      <Text style={styles.text2}>Accounts Settings</Text>
      <View>
        <Touchable
        onPress={()=>{
          navigation.navigate('PlayerChangePassword')
        }}
          buttonstyle={styles.buttonstyle}
          title={'Change Password'}
          leftImage={IMG.key}
          icon={IMG.next}
          textStyle={styles.textStyle}
          firstcontainer={styles.firstcontainer}
        />
        <Touchable
          onPress={() => {
            navigation.navigate('CoachEditProfile');
          }}
          buttonstyle={styles.buttonstyle}
          title={'Edit Profile'}
          leftImage={IMG.user2}
          icon={IMG.next}
          textStyle={styles.textStyle}
          firstcontainer={styles.firstcontainer}
        />
      </View>
      <View style={styles.logoutcontainer}>
        <Text style={styles.text2}>Prefrences</Text>
        <Touchable
          onPress={() => {
            navigation.navigate('Login2');
          }}
          buttonstyle={styles.buttonstyle}
          title={'Logout'}
          leftImage={IMG.logout}
          icon={IMG.next}
          textStyle={styles.textStyle}
          firstcontainer={styles.firstcontainer}
        />
      </View>
    </View>
    </ScrollView>
  );
};

export default CoachSetting;
