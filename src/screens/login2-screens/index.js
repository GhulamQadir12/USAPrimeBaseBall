import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from './style';
import {colors} from '../../config/colors';
import * as IMG from '../../assets/images/images';
import Touchable from '../../components/atoms/button';
import {mvs} from '../../config/metrices';
import Textinput from '../../components/atoms/textinput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import GradientText2 from '../../components/gradient-text2';
import {Formik} from 'formik';
import {validationSchemaLogin} from '../../validations/validation';
import { CreateUser, RegisterUser, LoginUser } from '../../services/firebase/auth';
import { getData } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';



const Login2 = ({navigation}) => {
  const [data, setdata] = React.useState();
    const dispatch = useDispatch();
const themeColors = useTheme().colors; 
  const onPress = () => {
    // navigation.navigate('Signup');
    navigation.navigate('ApiDataScreen');
  };
  const initialValues={
    gmail: '',
    password: '',
  }

  //   try {
  //     const jsonValue = await AsyncStorage.getItem('myData');
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  // const getData2 = async () => {
  //   const data = await getData();
  //   console.log('data is', data.email);
  //   console.log('data is', data);
  // };
  const handleRegister = async (values,{resetForm}) => {
    try {
     const data = await LoginUser(values.gmail,values.password,navigation);
      dispatch(getData(data)); 
      console.log(' Registered data :',data)
      resetForm();
    } catch (error) {
      console.log('Registration failed: ' , error);
    }
  };

 
  return (
    <ScrollView style={[styles.container,{backgroundColor:themeColors.card}]} showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.header}>
          <Text style={[styles.text, styles.maintext]}>USA Prime Baseball</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={IMG.splash}
          />
        </View>
        <View>
          <GradientText2 text="Login" style={[styles.text, styles.maintext]} />
          <Text style={[styles.text2, styles.maintext,{color:themeColors.text}]}>
            Please sign in to continue.
          </Text>
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={
            handleRegister
          //   (values,{resetForm}) => {
          // console.log(values),

        // LoginUser(values.gmail,values.password,navigation)
        // UserAuthenticateLogin(values.gmail,values.password,navigation)
        // CreateUser(values.gmail,values.password,navigation)
        // UserAuthenticate(values.gmail,values.password)     
          // resetForm();}
          }

          validationSchema={validationSchemaLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={{marginTop: mvs(10)}}>
                <Textinput
                  icon={
                    <EvilIcons name="user" color={colors.red} size={mvs(25)} />
                  }
                  onChangeText={handleChange('gmail')}
                  value={values.gmail}
                  placeholder="User Name"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('gmail')}
                  error={touched.gmail && errors.gmail}
                  containerStyle={styles.containerStyle}
                  multilines={false}
                />
                <Textinput
                  icon={
                    <Ionicons
                      name="key-outline"
                      color={colors.red}
                      size={mvs(25)}
                    />
                  }
                  onChangeText={handleChange('password')}
                  value={data}
                  placeholder="Password"
                  keyboardType="ascii-capable"
                  onBlur={handleBlur('password')}
                  error={touched.password && errors.password}
                  multilines={false}
                />
              </View>

              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.text2,
                    {fontSize: mvs(12), fontFamily: 'Nunito-Bold'},{color:themeColors.text}
                  ]}>
                  Create a player chat {' '}
                </Text>
                <TouchableOpacity onPress={onPress}>
                  <Text style={{color: colors.red, fontFamily: 'Nunito-Bold'}}>
                    {' '}
                    Account.
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.button,{backgroundColor:themeColors.card}]}>
                <Touchable
                  title={'Login to chat'}
                  onPress={handleSubmit}
                  buttonstyle={styles.buttonstyle}
                  textStyle={[styles.buttontext, styles.maintext]}
                />
                <Text
                  style={[
                    styles.endtext,
                    styles.maintext,
                    {marginTop: mvs(10)},
                    ,{color:themeColors.text}
                  ]}>
                  Only for Players, Coaches and Directors
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Login2;
