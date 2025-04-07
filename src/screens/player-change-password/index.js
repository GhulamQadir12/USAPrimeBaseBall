import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Textinput from '../../components/atoms/textinput';
import Touchable from '../../components/atoms/button';
import { Formik } from 'formik';
import { validationSchemaEmail } from '../../validations/validation';
import { colors } from '../../config/colors';

const PlayerChangePassword = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:colors.white}}>
    <View style={styles.container}>
      <Touchable leftImage={IMG.back} buttonstyle={styles.buttonstyle2} onPress={()=>navigation.goBack()}/>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Forgot Password</Text>
        <Text style={styles.text2}>
          Enter the email address associated with your account.
        </Text>
      </View>
      <Formik 
      initialValues={{
        gmail: '',
      }}
      onSubmit={(values, {resetForm}) => {
        console.log('values',values)
        navigation.navigate('PlayerChangePassword2')
          resetForm();
        }}
      validationSchema={validationSchemaEmail}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
      <View>
      <Textinput 
        onChangeText={handleChange('gmail')}
                placeholder="Email address"
                value={values.gmail}
                keyboardType="ascii-capable"
                onBlur={handleBlur('gmail')}
                error={touched.gmail && errors.gmail}
                placeholderTextColor={'#B7C6D9'}
                multilines={false}
      />
      <Touchable 
       onPress={handleSubmit}
        title={'Send'}
        buttonstyle={styles.buttonstyle}        
      />
      </View>
        )}
      </Formik>
    </View>
    </ScrollView>
  );
};

export default PlayerChangePassword;
