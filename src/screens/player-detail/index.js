import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import {mvs} from '../../config/metrices';
import {useSelector} from 'react-redux';
import Touchable from '../../components/atoms/button';

const PlayerDetail = ({navigation}) => {
  const profileData = useSelector(state => state.profile_data_reducer);
  console.log('profile data', profileData);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Touchable leftImage={IMG.back} buttonstyle={styles.buttonstyle2} onPress={()=>navigation.goBack()}/>
          <Text style={styles.text}>Player Request</Text>
        </View>
        <View style={styles.piccontainer}>
          <Text style={styles.text}>John Doe</Text>
          <View style={styles.piccontainer2}>
            <Image
              source={IMG.profileman}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
        <View style={{marginBottom:mvs(13)}}>
          <Text style={{...styles.text, fontSize: mvs(26)}}>Personal Info</Text>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                Full home address
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.location}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Zip</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.zip}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                Date of Birth
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.birthday}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                Graduation Year
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.year}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                Email Address
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.gmail}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Twitter </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.twitter}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                Instagram{' '}
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.insta}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                College Name
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.school}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                Coach Name
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.baseball}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                Phone Number
              </Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.phoneNumber}
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginBottom:mvs(13)}}>
          <Text style={{...styles.text, fontSize: mvs(26)}}>Physic</Text>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Height</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.height}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>weight</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.weight}
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginBottom:mvs(13)}}>
          <Text style={{...styles.text, fontSize: mvs(26)}}>Sport Position</Text>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Batter</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.ball}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Primary Position</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.man}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Secondry Postion</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.man}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{...styles.text, fontSize: mvs(26)}}>Uniform</Text>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Hat Size</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.height}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Shorts Size</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.short}
              </Text>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>Shirt Size</Text>
            </View>
            <View style={styles.textcontainer}>
              <Text style={{...styles.text2, fontSize: mvs(14)}}>
                {profileData.shirt}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlayerDetail;
