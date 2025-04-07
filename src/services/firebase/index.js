import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

// import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'; // Import Firestore
// import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export async function CreateUser(email, password,navigation) {
//   try {
//     const res = await auth().createUserWithEmailAndPassword(email, password,navigation);
//     console.log('User account created & signed in!', res);
//     return res;
//   } catch (error) {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     } else if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     } else {
//       console.error('Error creating user:', error);
//     }
//     throw error;
//   }
// }

export async function CreateUser(values, navigation, driverSide) {
  try {
    const res = await auth().createUserWithEmailAndPassword(
      values.email,
      values.password,
    );
    const user = res.user;
    await UserInfo(values, user, driverSide);
    // await firestore().collection('users').doc(user.uid).set({
    //   username: values.firstname,
    //   email: user.email,
    //   uid: user.uid,
    // });
    // console.log('user account created', res);
    navigation.navigate('Login2');
    return res;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    } else {
      console.error('Error creating user:', error);
    }
    throw error;
  }
}

// export async function UserAuthenticate(email, password,navigation) {
//   try {
//     const res = await auth().signInWithEmailAndPassword(email, password,navigation);
//     console.log('User account created & signed in!', res);
//      navigation.navigate('Playernavigation', {
//           screen: 'PlayerChatHome',
//         });
//     return res;
//   } catch (error) {
//     Alert.alert('plese enter the valid credentials')
//     throw error;
//   }
// }

const StoreData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('myData', jsonValue);
    console.log('i am running', value);
  } catch (error) {
    Alert.alert(error);
  }
  // console.log(value.email);
};

const ClearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage successfully cleared!');
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};

export async function UserAuthenticate(email, password, navigation) {
  // const [userData,setUserData] = React.useState({})
  var userData = 0;

  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    const user = res.user;

    const userDoc = await firestore().collection('users').doc(user.uid).get();
    if (userDoc.exists) {
      userData = userDoc.data();
      console.log('User data fetching', userData);
    } else {
      console.log('No such user document!');
    }

    await ClearStorage();

    await StoreData(userData);

    if (userData.driverSide === 'playerside') {
      navigation.navigate('Playernavigation', {
        screen: 'PlayerChatHome',
      });
    } else if (userData.driverSide === 'coachside') {
      navigation.navigate('Coachnavigation', {
        screen: 'CoachHome',
      });
    } else {
      navigation.navigate('Directornavigation', {
        screen: 'DirectorChatHome',
      });
    }
    return userData;
  } catch (error) {
    Alert.alert('Here Please enter valid credentials');
    throw error;
  }
}

export async function UserInfo(values, user, driverSide) {
  try {
    await firestore().collection('users').doc(user.uid).set({
      fname: values.firstname,
      lname: values.lastname,
      email: user.email,
      uid: user.uid,
      phone: values.mobilenumber,
      birthday: values.birthday,
      city: values.city,
      state: values.state,
      streetaddress: values.streetaddress,
      year: values.year,
      zipcode: values.zipcode,
      insta: values.insta,
      fb: values.fb,
      driverSide: driverSide,
      password: values.password,
      img: values.img,
    });
    // console.log('User values uploaded', values);
    // return res;
  } catch (error) {
    throw error;
  }
}

export async function UserInfoUpdate(values) {
  try {
    console.log('values arguments', values, 'user values', values.driverSide);
    await firestore().collection('users').doc(values.uid).update({
      fname: values.firstname,
      lname: values.lastname,
      email: values.email,
      uid: values.uid,
      phone: values.mobilenumber,
      birthday: values.birthday,
      city: values.city,
      state: values.state,
      streetaddress: values.streetaddress,
      year: values.year,
      zipcode: values.zipcode,
      insta: values.insta,
      fb: values.fb,
      driverSide: values.driverSide,
      password: values.password,
      img: values.img,
    });
  } catch (error) {
    console.log('her is error');
    throw error;
  }
}

export async function Logoutfunc(navigation) {
  try {
    auth().signOut();
    await ClearStorage();
    navigation.navigate('Login2');
  } catch (error) {
    throw error;
  }
}
