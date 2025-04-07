import {View, Text, Image, ScrollView,useColorScheme } from 'react-native';
import React from 'react';
import styles from './style';
import * as IMG from '../../assets/images/images';
import Touchable from '../../components/atoms/button';
import {mvs} from '../../config/metrices';
import { colors } from '../../config/colors';
import {useTheme} from '@react-navigation/native'

const Login = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Login2');
  };

const theme = useTheme().colors;
const isDarkTheme = ''
console.log('in theme :',theme)
console.log('isDark :',isDarkTheme)

  return (
    // <View style={[styles.container,isDarkTheme ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <ScrollView contentContainerStyle={{flexGrow: 1,paddingBottom:mvs(100)}} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.text, styles.maintext, { color: theme.text }]}>USA Prime Baseball</Text>
          <Image style={styles.image} resizeMode="contain" source={IMG.splash} />
        </View>
        <View style={{gap: mvs(12)}}>
          <View style={styles.middle}>
            <Image
              source={IMG.eclipse}
              resizeMode="contain"
              style={styles.image2}
            />
            <Text style={[styles.text2, styles.maintext,{ color: theme.text }]}>Team Store</Text>
          </View>
          <View style={styles.middle}>
            <Image
              source={IMG.eclipse2}
              resizeMode="contain"
              style={styles.image2}
            />
            <Text style={[styles.text2, styles.maintext,{ color: theme.text }]}>USA Prime Website</Text>
          </View>
          <View style={styles.middle}>
            <Image
              source={IMG.eclipse3}
              resizeMode="contain"
              style={styles.image2}
            />
            <Text style={[styles.text2, styles.maintext,{ color: theme.text }]}>Customer Service</Text>
          </View>
          <View style={styles.middle}>
            <Image
              source={IMG.eclipse4}
              resizeMode="contain"
              style={styles.image2}
            />
            <Text style={[styles.text2, styles.maintext,{ color: theme.text }]}>
              Annual popcorn fundraiser
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Touchable
          title={'Login to chat'}
          onPress={onPress}
          buttonstyle={styles.buttonstyle}
          textStyle={[styles.buttontext, styles.maintext]}
        />
        <Text style={[styles.endtext, styles.maintext, {marginTop: mvs(10)},{ color: theme.text }]}>
          Only for Players, Coaches and Directors
        </Text>
      </View>
    </View>
  );
};

export default Login;
