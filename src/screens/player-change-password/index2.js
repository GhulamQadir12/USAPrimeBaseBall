import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import * as IMG from '../../assets/images/images'
import Touchable from '../../components/atoms/button'
import { colors } from '../../config/colors'

const PlayerChangePassword2 = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:colors.white}}>
    <View style={styles.container}>
        <View style={styles.headermaincontainer}>
        <Touchable leftImage={IMG.back} buttonstyle={styles.buttonstyle2} onPress={()=>navigation.goBack()}/>

          <View style={styles.headercontainer}>
            <Text style={styles.text3}>Change Password</Text>
          </View>
        </View>
        <Text style={styles.emailtext}>
        Check Your Email
        </Text>
        <Text style={styles.desText}>
        Please Check your Mail. we have sent you an email that contains a verification code
        </Text>
        <Image 
          source={IMG.reademail}
          style={styles.image}
        />
        <Touchable 
        onPress={()=>{navigation.navigate('PlayerVerification')}}
          title={'Verify Code'}
          buttonstyle={{...styles.buttonstyle,width:'80%'}}
          textStyle={styles.textstyle}
        />
    </View>
    </ScrollView>
  )
}

export default PlayerChangePassword2