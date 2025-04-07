import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from './style';
import * as IMG from '../../assets/images/images';
import Touchable from '../../components/atoms/button';
import Textinput from '../../components/atoms/textinput';
import GradientText from '../../components/gradient-text';
import DropdownComponent from '../../components/atoms/dropdown';
import {validationSchemaSignup} from '../../validations/validation';
import {Formik} from 'formik';
import DateTimePicker from '../../components/molecules/modles/datepickermodle';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import {RegisterUser} from '../../services/firebase/auth';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import {firebase} from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [playerside, setPlayerSide] = React.useState(true);
  const [coachside, setCoachSide] = React.useState(false);
  const [directorSide, setDirectorSide] = React.useState(false);
  const [driverSide, setDriverSide] = React.useState('playerside');
  // const usersCollection = firestore().collection('Users');
  // console.log(usersCollection)

  const initialValues = {
    firstname: '',
    lastname: '',
    streetaddress: '',
    city: '',
    zipcode: '',
    birthday: '',
    year: '',
    email: '',
    mobilenumber: '',
    insta: '',
    fb: '',
    state: '',
    password: '',
    confirm: '',
    img:''
  };

  // const data = {
  //   // id: uuid.v4(),
  //   fname: 'Qadir',
  //   lname: 'Ali',
  // };

  // const addDataToFirestore = async()=>{
  //   try {
  //     firestore().collection('User').add(data)
  //   } catch (error) {
  //     console.log('Error :',error)
  //   }
  // }

  const Data = [
    {label: 'State 1', value: 'State 1'},
    {label: 'State 2', value: 'State 2'},
    {label: 'State 3', value: 'State 3'},
    {label: 'State 4', value: 'State 4'},
  ];
  const handleRegister = async (values, {resetForm}) => {
    try {
      const {birthday, state} = values;
      if (!birthday || !state) {
        console.log('Please fill the all required fields.');
        return;
      }
      console.log('values are', values);
      // await RegisterUser(values.email, values.password, navigation);
      // await RegisterUser(values.email, values.password,values.firstname, navigation);
      await RegisterUser(values,navigation,driverSide);

      // console.log('User registered successfully! from signup');
      resetForm();
    } catch (error) {
      console.log('Registration failed: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.text, styles.maintext]}>USA Prime Baseball</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={IMG.splash}
          />
        </View>
        <View>
          <GradientText text="Sign Up" style={[styles.text, styles.maintext]} />
          <Text style={styles.text2}>Please sign in to continue.</Text>
        </View>
        <View style={styles.buttoncontainer}>
          <Touchable
            onPress={() => {
              setDriverSide('playerside');
              setPlayerSide(true);
              setCoachSide(false);
              setDirectorSide(false);
              // navigation.navigate('Playernavigation', {
              //   screen: 'PlayerChatHome',
              // });
            }}
            buttonstyle={{
              ...styles.buttonstyle,
              backgroundColor: playerside ? colors.blue : colors.white,
            }}
            textStyle={{
              ...styles.textStyle,
              color: playerside ? colors.white : colors.blue,
            }}
            title={'Player Side'}
          />
          <Touchable
            onPress={() => {
              setDriverSide('coachside');
              setPlayerSide(false);
              setCoachSide(true);
              setDirectorSide(false);
              // navigation.navigate('Coachnavigation', {
              //   screen: 'CoachHome',
              // });
            }}
            buttonstyle={{
              ...styles.buttonstyle,
              backgroundColor: coachside ? colors.blue : colors.white,
            }}
            textStyle={{
              ...styles.textStyle,
              color: coachside ? colors.white : colors.blue,
            }}
            title={'Coach Side'}
          />
          <Touchable
            onPress={() => {
              setDriverSide('directorside');
              setPlayerSide(false);
              setCoachSide(false);
              setDirectorSide(true);
              // navigation.navigate('Directornavigation', {
              //   screen: 'DirectorChatHome',
              // });
            }}
            buttonstyle={{
              ...styles.buttonstyle,
              backgroundColor: directorSide ? colors.blue : colors.white,
            }}
            textStyle={{
              ...styles.textStyle,
              color: directorSide ? colors.white : colors.blue,
            }}
            title={'Director Side'}
          />
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={handleRegister}
          validationSchema={validationSchemaSignup}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View>
              <View style={styles.inputcontainer}>
                <Textinput
                  onChangeText={handleChange('firstname')}
                  value={values.firstname}
                  placeholder="First Name"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('firstname')}
                  error={touched.firstname && errors.firstname}
                />
                <Textinput
                  onChangeText={handleChange('lastname')}
                  value={values.lastname}
                  placeholder="Last Name"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('lastname')}
                  error={touched.lastname && errors.lastname}
                />
                <Textinput
                  onChangeText={handleChange('streetaddress')}
                  value={values.streetaddress}
                  placeholder="Street Address"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('streetaddress')}
                  error={touched.streetaddress && errors.streetaddress}
                />
                <Textinput
                  onChangeText={handleChange('city')}
                  value={values.city}
                  placeholder="City"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('city')}
                  error={touched.city && errors.city}
                />
                <DropdownComponent
                  onBlur={handleBlur('firstname')}
                  Data={Data}
                  value={values.state}
                  onChange={value => setFieldValue('state', value)}
                />
                {touched.state && errors.state && (
                  <Text style={styles.errorText}>{errors.state}</Text>
                )}
                <Textinput
                  onChangeText={handleChange('zipcode')}
                  value={values.zipcode}
                  placeholder="Zip Code"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('zipcode')}
                  error={touched.zipcode && errors.zipcode}
                />
                <View style={styles.datecontainer}>
                  <Text style={styles.birthdayText}>
                    {values.birthday
                      ? `Selected Date : ${values.birthday}`
                      : 'Select Your Birthday its required'}
                  </Text>
                  <DateTimePicker
                    onChangeText={date => setFieldValue('birthday', date)}
                  />
                </View>
                {touched.birthday && errors.birthday && (
                  <Text style={styles.errorText}>{errors.birthday}</Text>
                )}
                <Textinput
                  onChangeText={handleChange('year')}
                  value={values.year}
                  placeholder="High School Graduation Year"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('year')}
                  error={touched.year && errors.year}
                />
                <Textinput
                  onChangeText={handleChange('mobilenumber')}
                  value={values.mobilenumber}
                  placeholder="Phone Number"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('mobilenumber')}
                  error={touched.mobilenumber && errors.mobilenumber}
                />
                <Textinput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="Email"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('email')}
                  error={touched.email && errors.email}
                />
                <Textinput
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="password"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password}
                />
                <Textinput
                  onChangeText={handleChange('confirm')}
                  value={values.confirm}
                  placeholder="Confirm Password"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('confirm')}
                  error={touched.confirm && errors.confirm}
                />
                <Textinput
                  onChangeText={handleChange('insta')}
                  value={values.insta}
                  placeholder="Instagram Username"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('insta')}
                  option={true}
                />
                <Textinput
                  onChangeText={handleChange('fb')}
                  value={values.fb}
                  placeholder="Facebook Username"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('fb')}
                  option={true}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.textcolor}>Already have an</Text>
                  <TouchableOpacity
                    onPress={
                      async()=>{
                      const users = await firestore().collection('Users').doc('ABC').get();
                      console.log("checking the user ABC :",users)
                      console.log('value',users._data.age)
                      // firestore()
                      //   .collection('Users')
                      //   .add({
                      //     name: 'Pak',
                      //     age: 75,
                      //   })
                      //   .then(() => {
                      //     console.log('User added!');
                      //   });
                      // if (playerside) {
                      //   setDriverSide('PlayerSide');
                      // } else if (directorSide) {
                      //   setDriverSide('DirectorSide');
                      // } else {
                      //   setDriverSide('CoachSide');
                      // }
                      // navigation.navigate('Login2')
                    }}>
                    <Text style={{color: colors.red}}> Account.</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttoncontainer2}>
                <Touchable
                  title={'Continue'}
                  onPress={handleSubmit}
                  buttonstyle={styles.buttonstyle2}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Signup;
