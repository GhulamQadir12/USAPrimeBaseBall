import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import Touchable from '../../components/atoms/button';
import {colors} from '../../config/colors';
import Textinput from '../../components/atoms/textinput';
import {Formik} from 'formik';
import {validationSchemaEditProfile} from '../../validations/validation';
import {useSelector, useDispatch} from 'react-redux';
import {addProfileData} from '../../redux/actions';
import {launchImageLibrary} from 'react-native-image-picker';
import {UserInfoUpdation} from '../../services/firebase/auth';
import { getData } from '../../redux/actions';


const PlayerEditProfile = ({navigation}) => {
  const [personalInfo, setPersonalInfo] = useState(true);
  const [physic, setPhysic] = useState(false);
  const [sportPosition, setSportPosition] = useState(false);
  const [uniform, setUniform] = useState(false);
  const profileData = useSelector(state => state.profile_data_reducer);
  const firebaseData = useSelector(state => state.get_data_reducer);
  // const newFirebaseData = firebaseData;
  const [profileImageUri, setProfileImageUri] = useState(null);
  const [coverImageUri, setCoverImageUri] = useState(null);
  // console.log('i am in edit profile', profileData);
  const dispatch = useDispatch();
  const pickImage = setImageUri => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image Picker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  firebaseData.img = profileImageUri;
  console.log('firebase data', firebaseData);

  // console.log('consoled values :',firebaseData.img,'after updation',firebaseData)

  // firebaseData({
  //   ...firebaseData,
  //   img: profileImageUri
  // });
  // console.log('new',newFirebaseData)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={IMG.back}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Edit Profile</Text>
          </View>
        </View>
        <Text style={styles.text}>Personal Information</Text>
        {/* <View style={styles.piccontainer}> */}

        <TouchableOpacity
          style={styles.piccontainer}
          onPress={() => {
            pickImage(setProfileImageUri);
            console.log(setProfileImageUri);
          }}>
          {profileImageUri ? (
            <Image
              source={{uri: firebaseData.img}}
              style={styles.profileimage}
              resizeMode={'contain'}
            />
          ) : (
            <Image
              source={IMG.profileman}
              style={styles.profileimage}
              resizeMode={'contain'}
            />
          )}
        </TouchableOpacity>
        {/* </View> */}

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.buttoncontainer}>
              <Touchable
                onPress={() => {
                  setPersonalInfo(true);
                  setPhysic(false);
                  setSportPosition(false);
                  setUniform(false);
                }}
                buttonstyle={{
                  ...styles.buttonstyle,
                  backgroundColor: personalInfo ? colors.blue : colors.white,
                }}
                textStyle={{
                  ...styles.textStyle,
                  color: personalInfo ? colors.white : colors.blue,
                }}
                title={'Personal Info'}
              />
              <Touchable
                onPress={() => {
                  setPersonalInfo(false);
                  setPhysic(true);
                  setSportPosition(false);
                  setUniform(false);
                }}
                buttonstyle={{
                  ...styles.buttonstyle,
                  backgroundColor: physic ? colors.blue : colors.white,
                }}
                textStyle={{
                  ...styles.textStyle,
                  color: physic ? colors.white : colors.blue,
                }}
                title={'Physic'}
              />
              <Touchable
                onPress={() => {
                  setPersonalInfo(false);
                  setPhysic(false);
                  setSportPosition(true);
                  setUniform(false);
                }}
                buttonstyle={{
                  ...styles.buttonstyle,
                  backgroundColor: sportPosition ? colors.blue : colors.white,
                }}
                textStyle={{
                  ...styles.textStyle,
                  color: sportPosition ? colors.white : colors.blue,
                }}
                title={'Sport Position'}
              />
              <Touchable
                onPress={() => {
                  setPersonalInfo(false);
                  setPhysic(false);
                  setSportPosition(false);
                  setUniform(true);
                }}
                buttonstyle={{
                  ...styles.buttonstyle,
                  backgroundColor: uniform ? colors.blue : colors.white,
                }}
                textStyle={{
                  ...styles.textStyle,
                  color: uniform ? colors.white : colors.blue,
                }}
                title={'Uniform'}
              />
            </View>
          </ScrollView>
        </View>
        <Formik
          initialValues={{
            location: profileData.location,
            birthday: profileData.birthday,
            year: profileData.year,
            gmail: profileData.gmail,
            school: profileData.school,
            twitter: profileData.twitter,
            insta: profileData.insta,
            baseball: profileData.baseball,
            team: profileData.team,
            height: profileData.height,
            weight: profileData.weight,
            ball: profileData.ball,
            man: profileData.man,
            cap: profileData.cap,
            shirt: profileData.shirt,
            short: profileData.short,
            email: profileData.email,
          }}
          onSubmit={async values => {
            // console.log('Form Values:', values);
            dispatch(addProfileData(values));
            // dispatch(getData(firebaseData))
            //  navigation.goBack();
            // console.log('above');
           console.log('here',await UserInfoUpdation(firebaseData));
            // console.log('storing values', storing);
          }}
          validationSchema={validationSchemaEditProfile}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View style={{flex: 1}}>
              <>
                {personalInfo ? (
                  <ScrollView
                    style={styles.inputcontainer}
                    showsVerticalScrollIndicator={false}>
                    <Textinput
                      icon={<Image source={IMG.locaion} />}
                      onChangeText={handleChange('location')}
                      onBlur={handleBlur('location')}
                      error={touched.location && errors.location}
                      value={values.location}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.mail} />}
                      value={'567999'}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      editable={false}
                    />
                    <Textinput
                      icon={<Image source={IMG.cake} />}
                      onChangeText={handleChange('birthday')}
                      onBlur={handleBlur('birthday')}
                      error={touched.birthday && errors.birthday}
                      value={values.birthday}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.hat} />}
                      onChangeText={handleChange('year')}
                      onBlur={handleBlur('year')}
                      error={touched.year && errors.year}
                      value={values.year}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.gmail} />}
                      onChangeText={handleChange('gmail')}
                      onBlur={handleBlur('gmail')}
                      error={touched.gmail && errors.gmail}
                      value={values.gmail}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.insta} />}
                      onChangeText={handleChange('insta')}
                      onBlur={handleBlur('insta')}
                      error={touched.insta && errors.insta}
                      value={values.insta}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.twitter} />}
                      onChangeText={handleChange('twitter')}
                      onBlur={handleBlur('twitter')}
                      error={touched.twitter && errors.twitter}
                      value={values.twitter}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.school} />}
                      onChangeText={handleChange('school')}
                      onBlur={handleBlur('school')}
                      error={touched.school && errors.school}
                      value={values.school}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.baseball} />}
                      onChangeText={handleChange('baseball')}
                      onBlur={handleBlur('baseball')}
                      error={touched.baseball && errors.baseball}
                      value={values.baseball}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.team} />}
                      onChangeText={handleChange('team')}
                      onBlur={handleBlur('team')}
                      error={touched.team && errors.team}
                      value={values.team}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                  </ScrollView>
                ) : null}
              </>
              <>
                {physic ? (
                  <View style={styles.inputcontainer}>
                    <Textinput
                      icon={<Image source={IMG.height} />}
                      onChangeText={handleChange('height')}
                      onBlur={handleBlur('height')}
                      error={touched.height && errors.height}
                      value={values.height}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.weight} />}
                      onChangeText={handleChange('weight')}
                      onBlur={handleBlur('weight')}
                      error={touched.weight && errors.weight}
                      value={values.weight}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                  </View>
                ) : null}
              </>
              <>
                {sportPosition ? (
                  <View style={styles.inputcontainer}>
                    <Textinput
                      icon={<Image source={IMG.ball} />}
                      onChangeText={handleChange('ball')}
                      onBlur={handleBlur('ball')}
                      error={touched.ball && errors.ball}
                      value={values.ball}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.man} />}
                      onChangeText={handleChange('man')}
                      onBlur={handleBlur('man')}
                      error={touched.man && errors.man}
                      value={values.man}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.man} />}
                      onChangeText={handleChange('man')}
                      onBlur={handleBlur('man')}
                      error={touched.man && errors.man}
                      value={values.man}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                  </View>
                ) : null}
              </>
              <>
                {uniform ? (
                  <View style={styles.inputcontainer}>
                    <Textinput
                      icon={<Image source={IMG.cap} />}
                      onChangeText={handleChange('cap')}
                      onBlur={handleBlur('cap')}
                      error={touched.cap && errors.cap}
                      value={values.cap}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.shirt} />}
                      onChangeText={handleChange('shirt')}
                      onBlur={handleBlur('shirt')}
                      error={touched.shirt && errors.shirt}
                      value={values.shirt}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                    <Textinput
                      icon={<Image source={IMG.short} />}
                      onChangeText={handleChange('short')}
                      onBlur={handleBlur('short')}
                      error={touched.short && errors.short}
                      value={values.short}
                      containerStyle={styles.containerStyle}
                      keyboardType="ascii-capable"
                      errortext={styles.errortext}
                    />
                  </View>
                ) : null}
              </>
              <Touchable
                onPress={handleSubmit}
                title={'Save Changes'}
                buttonstyle={styles.buttonstyle2}
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default PlayerEditProfile;
