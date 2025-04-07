import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Textinput from '../../components/atoms/textinput'
import Touchable from '../../components/atoms/button'
import { Formik } from 'formik'
import { validationSchemaPasswords } from '../../validations/validation'
import { mvs } from '../../config/metrices'
import { colors } from '../../config/colors'

const PlayerVerification2 = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:colors.white}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Text style={{...styles.headertext,alignSelf:'flex-start',marginTop:mvs(45)}}>Verification Code</Text>
      <Formik 
      initialValues={{
        password:'',
        confirmPassword:''
      }}
      onSubmit={(values, {resetForm}) => {
        console.log('values',values)
        navigation.navigate('PlayerResetPassword')
          resetForm();
        }}
      validationSchema={validationSchemaPasswords}
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
        placeholder={'New Password'}
        containerStyle={styles.containerStyle1}
        onChangeText={handleChange('password')}
                value={values.password}
                keyboardType="ascii-capable"
                onBlur={handleBlur('password')}
                error={touched.password && errors.password}
      />
      <Textinput 
        placeholder={'Confirm New Password'}
        containerStyle={styles.containerStyle}
        onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                keyboardType="ascii-capable"
                onBlur={handleBlur('confirmPassword')}
                error={touched.confirmPassword && errors.confirmPassword}
      />
      <Touchable 
      onPress={handleSubmit}
        title={'Change Password'}
        buttonstyle={styles.buttonstyle}
      />
         </View>
        )}
         </Formik>
    </View>
    </ScrollView>
  )
}

export default PlayerVerification2

