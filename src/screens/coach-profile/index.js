import {View, Text, TouchableOpacity, Image,ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../config/colors';
import Touchable from '../../components/atoms/button';
import { useSelector } from 'react-redux';

const CoachProfile = ({navigation}) => {

  const Data = useSelector(state=>state.direc_data_reducer)
  console.log('adta is ',Data.location)
  return (
    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false} contentContainerStyle={styles.container} >
    {/* <View style={styles.container}> */}
      <View style={styles.headercontainer}>
        <View style={styles.headerinsidecontainer}>
          <Touchable
            leftImage={IMG.back}
            buttonstyle={styles.buttonstyle2}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Coach Profile</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CoachSetting');
          }}>
          <AntDesign
            name={'setting'}
            size={30}
            color={colors.black}
            // style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profilecontainer}>
        <Image
          source={IMG.coachprofile}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text1}>James Willam</Text>
      </View>
      <View style={styles.cardscontainer}>
        <View style={styles.cardstyle}>
          <Image
            source={IMG.locaion}
            resizeMode="contain"
            style={styles.image3}
          />
          <Text style={styles.text2}>{Data.location}</Text>
        </View>
        <View style={styles.cardstyle}>
          <Image
            source={IMG.mail}
            resizeMode="contain"
            style={styles.image3}
          />
          <Text style={styles.text2}>{Data.email}</Text>
        </View>
        <View style={styles.cardstyle}>
          <Image
            source={IMG.cake}
            resizeMode="contain"
            style={styles.image3}
          />
          <Text style={styles.text2}>{Data.birthday}</Text>
        </View>
        <View style={styles.cardstyle}>
          <Image
            source={IMG.gmail}
            resizeMode="contain"
            style={styles.image3}
          />
          <Text style={styles.text2}>{Data.gmail}</Text>
        </View>
      </View>
    {/* </View> */}
    </ScrollView>
  );
};

export default CoachProfile;
