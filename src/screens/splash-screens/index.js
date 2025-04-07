import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import * as IMG from '../../assets/images/images';
import styles from './style';
import {useDispatch} from 'react-redux';
import {addProfileData, addDirecProfileData} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from '../../redux/actions';

const Splash = ({navigation}) => {
  const dispatch = useDispatch();

  const [Data, setData] = React.useState({
    id: 0,
    location: 'Okland, OK',
    email: '6579999',
    birthday: '18-22-2022',
    year: '2022',
    gmail: 'emiliywatson12@gmail.com',
    insta: 'jone_12Jony',
    twitter: 'jone_12Jony',
    school: 'Imperial college Michigan',
    baseball: 'Mac Miller Coach',
    team: 'NY Bulls',
    height: '12 feet 12 inches',
    weight: '120 Pounds',
    ball: 'Right',
    man: 'RHP',
    cap: 'OK , OKland',
    shirt: '321456',
    short: '456789',
    zip: '213645',
    phoneNumber: '03256545789',
  });

  const getData2 = async () => {
    // console.log('i am running');
    try {
      const jsonValue = await AsyncStorage.getItem('myData');
      // console.log('fetched from async', jsonValue);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(error);
    }
  };

  const [Data2, setData2] = React.useState({
    id: 0,
    location: 'Okland, OK',
    email: '657999',
    birthday: '08-22-2022',
    gmail: 'emiliywatson12@gmail.com',
  });

  useEffect(() => {
    setTimeout(async () => {
      dispatch(addProfileData(Data));
      dispatch(addDirecProfileData(Data2));
      const fetchedData = await getData2();
      console.log('fetching from async using',fetchedData);
      dispatch(getData(fetchedData)); 

      if (fetchedData) {
        if (fetchedData.driverSide === 'playerside') {
          navigation.navigate('Playernavigation', {
            screen: 'PlayerChatHome',
          });
        } else if (fetchedData.driverSide === 'coachside') {
          navigation.navigate('Coachnavigation', {
            screen: 'CoachHome',
          });
        } else {
          navigation.navigate('Directornavigation', {
            screen: 'DirectorChatHome',
          });
        }
      }
      else{
        navigation.navigate('Login');
      }
    }, 10000);
  });

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={IMG.splash} />
    </View>
  );
};

export default Splash;
