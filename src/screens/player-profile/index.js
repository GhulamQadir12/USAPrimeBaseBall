import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../config/colors';
import Touchable from '../../components/atoms/button';
import {useSelector} from 'react-redux';

const PlayerProfile = ({navigation}) => {
  const [personalInfo, setPersonalInfo] = React.useState(true);
  const [physic, setPhysic] = React.useState(false);
  const [sportPosition, setSportPosition] = React.useState(false);
  const [uniform, setUniform] = React.useState(false);
  const profileData = useSelector(state => state.profile_data_reducer);
  const profileFirebaseData = useSelector(state => state.get_data_reducer);
console.log('getting from firebase:',profileFirebaseData)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.headerinsidecontainer}>
          <Touchable
            leftImage={IMG.back}
            buttonstyle={styles.buttonstyle2}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Profile</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('PlayerEditProfile')
            navigation.navigate('PlayerSetting');
          }}>
          <AntDesign
            name={'setting'}
            size={25}
            color={colors.black}
            // style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.text2}>USA Prime Baseball</Text>
          <Text style={styles.text3}>Christiano</Text>
          <Text style={styles.text3}>Ronaldo</Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image
            resizeMode="contain"
            style={styles.image2}
            source={IMG.profileman}
          />
        </View>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          style={styles.scrollview}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.buttoncontainer}>
            <Touchable
              onPress={() => {
                {
                  setPersonalInfo(true);
                  setPhysic(false);
                  setSportPosition(false);
                  setUniform(false);
                }
              }}
              title={'Personal Info'}
              buttonstyle={{
                ...styles.buttonstyle,
                backgroundColor: personalInfo ? colors.blue : colors.white,
              }}
              textStyle={{
                ...styles.textStyle,
                color: personalInfo ? colors.white : colors.blue,
              }}
            />
            <Touchable
              onPress={() => {
                {
                  setPersonalInfo(false);
                  setPhysic(true);
                  setSportPosition(false);
                  setUniform(false);
                }
              }}
              title={'Physic'}
              buttonstyle={{
                ...styles.buttonstyle,
                backgroundColor: physic ? colors.blue : colors.white,
              }}
              textStyle={{
                ...styles.textStyle,
                color: physic ? colors.white : colors.blue,
              }}
            />
            <Touchable
              onPress={() => {
                {
                  setPersonalInfo(false);
                  setPhysic(false);
                  setSportPosition(true);
                  setUniform(false);
                }
              }}
              title={'Sports Position'}
              buttonstyle={{
                ...styles.buttonstyle,
                backgroundColor: sportPosition ? colors.blue : colors.white,
              }}
              textStyle={{
                ...styles.textStyle,
                color: sportPosition ? colors.white : colors.blue,
              }}
            />
            <Touchable
              onPress={() => {
                {
                  setPersonalInfo(false);
                  setPhysic(false);
                  setSportPosition(false);
                  setUniform(true);
                }
              }}
              title={'Uniform'}
              buttonstyle={{
                ...styles.buttonstyle,
                backgroundColor: uniform ? colors.blue : colors.white,
              }}
              textStyle={{
                ...styles.textStyle,
                color: uniform ? colors.white : colors.blue,
              }}
            />
          </View>
        </ScrollView>
      </View>
      <>
        {personalInfo ? (
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.cardscontainer}>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.locaion}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.location}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.mail}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.email}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.cake}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.birthday}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.hat}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.year}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.gmail}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileFirebaseData.email}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.insta}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.insta}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.twitter}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.twitter}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.school}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.school}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.baseball}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.baseball}</Text>
              </View>
              <View style={styles.cardstyle}>
                <Image
                  source={IMG.team}
                  resizeMode="contain"
                  style={styles.image3}
                />
                <Text style={styles.text2}>{profileData.team}</Text>
              </View>
            </View>
          </ScrollView>
        ) : null}
      </>
      <>
        {physic ? (
          <View style={styles.physiccontainer}>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.height}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.height}</Text>
            </View>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.weight}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.weight}</Text>
            </View>
          </View>
        ) : null}
      </>
      <>
        {sportPosition ? (
          <View style={styles.physiccontainer}>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.ball}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.ball}</Text>
            </View>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.man}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.man}</Text>
            </View>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.man}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.man}</Text>
            </View>
          </View>
        ) : null}
      </>
      <>
        {uniform ? (
          <View style={styles.physiccontainer}>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.cap}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.cap}</Text>
            </View>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.shirt}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.shirt}</Text>
            </View>
            <View style={styles.cardstyle}>
              <Image
                source={IMG.short}
                resizeMode="contain"
                style={styles.image3}
              />
              <Text style={styles.text2}>{profileData.short}</Text>
            </View>
          </View>
        ) : null}
      </>
    </View>
    </ScrollView>
  );
};

export default PlayerProfile;
