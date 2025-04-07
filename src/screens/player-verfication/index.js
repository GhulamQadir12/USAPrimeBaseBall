import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import CodeFields from '../../components/atoms/codefield-compo'
import Touchable from '../../components/atoms/button'
import { mvs } from '../../config/metrices'
import { colors } from '../../config/colors'

const PlayerVerification = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:colors.white}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <View style={{marginVertical:mvs(20)}}>
      <Text style={styles.headertext}>Verification Code</Text>
      <Text style={styles.headerdes}>Enter the verification code we just send you to your email address</Text>
      <CodeFields />
      <Touchable 
      onPress={()=>{
        navigation.navigate('PlayerVerification2')
      }}
      buttonstyle={styles.buttonstyle}
        title={'Verify'}
      />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Didn't receive the code? </Text>
        <Touchable 
        title={'Resend'} 
        buttonstyle={styles.buttonstyle2}
        textStyle={styles.textStyle}
        />
      </View>
    </View>
    </ScrollView>
  )
}

export default PlayerVerification