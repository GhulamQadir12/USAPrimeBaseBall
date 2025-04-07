import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import * as IMG from '../../assets/images/images';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import Touchable from '../../components/atoms/button';

const CustomDrawerContent = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      {/* <DrawerContentScrollView {...props} style={{flex:1}}> */}
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#FF0038', '#0600FF']}
          style={styles.profileSection}
          start={{x: 0.65, y: 0.25}}>
          <View style={styles.maincontainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                props.navigation.closeDrawer();
              }}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <Image source={IMG.profileman} style={styles.profileImage} />
          </View>
          <Text style={[styles.text,styles.text2]}>Christiano Ronaldo</Text>
        </LinearGradient>

        <View style={styles.middleSection}>
          <Touchable
            onPress={() => navigation.navigate('PlayerProfile')}
            leftImage={IMG.user2}
            title={'Profile'}
            buttonstyle={styles.logoutButton2}
            textStyle={styles.logoutText}
            firstcontainer={styles.firstcontainer2}
            image={styles.img}
          />
          <Touchable
            onPress={() => navigation.navigate('EventCalender')}
            leftImage={IMG.calendar}
            title={'Calendar'}
            buttonstyle={styles.logoutButton2}
            textStyle={styles.middleText}
            firstcontainer={styles.firstcontainer2}
            image={styles.img}

          />
          <Touchable
            onPress={() => {}}
            leftImage={IMG.about}
            title={'About'}
            buttonstyle={styles.logoutButton2}
            textStyle={styles.logoutText}
            firstcontainer={styles.firstcontainer2}
            image={styles.img}
          />
          <Touchable
            onPress={() => {}}
            leftImage={IMG.Term}
            title={'Terms and Conditions'}
            buttonstyle={styles.logoutButton2}
            textStyle={styles.logoutText}
            firstcontainer={styles.firstcontainer2}
            image={styles.img}
          />

          <Touchable
            onPress={() => {navigation.navigate('PlayerLive')}}
            leftImage={IMG.Term}
            title={'Live Streams'}
            buttonstyle={styles.logoutButton2}
            textStyle={styles.logoutText}
            firstcontainer={styles.firstcontainer2}
            image={styles.img}
          />
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.divider} />
          <View style={styles.middleItem}>
            <Image source={IMG.eclipse} style={styles.image} />
            <Text style={styles.middleText}>Team Store</Text>
          </View>
          <View style={styles.middleItem}>
            <Image source={IMG.eclipse2} style={styles.image} />
            <Text style={styles.middleText}>USA Prime Website</Text>
          </View>
          <View style={styles.middleItem}>
            <Image source={IMG.eclipse3} style={styles.image} />
            <Text style={styles.middleText}>Customer Service</Text>
          </View>
          <View style={styles.middleItem}>
            <Image source={IMG.eclipse5} style={styles.image} />
            <Text style={styles.middleText}>Watch Live Stream</Text>
          </View>
          <View style={styles.middleItem}>
            <Image source={IMG.eclipse4} style={styles.image} />
            <Text style={styles.middleText}>Annual popcorn fundraiser</Text>
          </View>
        </View>

        <View style={styles.logoutSection}>
          <Touchable
            onPress={() => {
              navigation.navigate('Login2');
            }}
            leftImage={IMG.logout}
            title={'Logout'}
            buttonstyle={styles.logoutButton}
            textStyle={styles.logoutText}
            firstcontainer={styles.firstcontainer}
          />
        </View>
        {/* </DrawerContentScrollView> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: mvs(20),
  },
  profileSection: {
    height: mvs(210),
    justifyContent: 'center',
    padding: mvs(20),
    // top:mvs(-3)
  },
  text:{
    fontFamily:'Nunito-Bold'
  },
  text2:{
fontSize:mvs(22),
fontWeight:'600',
color:colors.white,
marginTop:mvs(13)
},
img:{
  width:mvs(18),
  height:mvs(18)
},
  backButton: {
    // position: 'absolute',
    // top: 20,
    // left: 20,
  },
  profileImage: {
    width: mvs(86),
    height: mvs(86),
    borderRadius: mvs(90.58),
    backgroundColor: colors.white,
    // marginBottom: 10,
  },
  // profileName: {
  //   marginTop: mvs(20),
  //   // marginLeft:mvs(30),
  //   fontSize: mvs(18),
  //   color: 'white',
  //   fontWeight: 'Nunito',
  // },
  menuSection: {
    paddingTop: mvs(10),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(20),
  },
  menuText: {
    fontSize: mvs(16),
    marginLeft: mvs(12),
    color: colors.black,
  },
  middleContainer: {
    paddingTop: mvs(10),
    paddingHorizontal: mvs(20),
    // backgroundColor: 'red',
  },
  middleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(13),
    gap: mvs(15),
  },
  image: {
    width: mvs(25),
    height: mvs(25),
  },
  middleText: {
    fontSize: mvs(16),
    fontFamily: 'Nunito',
    fontWeight:'600',
    color:colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: mvs(10),
  },
  logoutSection: {
    paddingHorizontal: mvs(20),
    paddingTop: mvs(60),
    borderTopWidth: mvs(1),
    borderTopColor: '#e0e0e0',
  },
  firstcontainer: {
    flexDirection: 'row',
    gap: mvs(20),
  },
  logoutButton: {
    width: '25%',
    backgroundColor: colors.white,
    borderWidth: 0,
    elevation: 0,
    paddingHorizontal: 0,
    bottom: 0,
  },
  logoutButton2: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 0,
    elevation: 0,
    paddingHorizontal: 0,
    gap: mvs(50),
  },
  middleSection: {
    paddingHorizontal: mvs(20),
    paddingTop: mvs(20),
    borderTopWidth: mvs(1),
    borderTopColor: '#e0e0e0',
  },
  firstcontainer2: {
    flexDirection: 'row',
    gap: mvs(20),
    // backgroundColor:'yellow',
    flexGrow:1
  },
  logoutText: {
    fontSize: mvs(16),
    color: 'black',
    fontFamily:'Nunito-Bold',
    fontWeight: '600',
  },
});

export default CustomDrawerContent;
