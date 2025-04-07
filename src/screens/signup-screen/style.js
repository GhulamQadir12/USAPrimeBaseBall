import {StyleSheet} from 'react-native';
import {mvs, width} from '../../config/metrices';
import {colors} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor: colors.white,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: mvs(29),
    marginTop: mvs(35),
    marginBottom: mvs(22),
  },
  maintext: {
    fontFamily:'Nunito-Bold'
  },
  text: {
    fontSize: mvs(35.32),
    color: colors.red,
    fontWeight: '700',
  },
  image: {
    width: mvs(110),
    height: mvs(108),
  },
  text2: {
    fontSize: mvs(13),
    color: colors.black,
    fontFamily:'Nunito-Bold',
    fontWeight:'400'

  },
  inputcontainer: {
    // backgroundColor:'red'
    paddingTop: mvs(10),
  },
  // text2: {
  //   fontSize: mvs(15),
  //   color: colors.black,
  //   // marginTop:mvs(-20)
  // },
  textContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  textcolor: {
    color: colors.black,
    fontFamily:'Nunito-Bold',
    fontWeight:'400'
  },
  buttoncontainer2: {
    // width:mvs(250),
    // height:mvs(100),
    width: '100%',
    marginVertical: mvs(30),
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonstyle2: {
    width: '80%',
  },
  datecontainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderColor: colors.blue,
    marginBottom: 25,
  },
  birthdayText: {
    color: colors.black,
    fontSize: mvs(15),
    fontFamily:'Nunito-Bold'
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    top: -20,
    fontFamily:'Nunito-Bold'
  },
  buttoncontainer: {
    flexDirection: 'row',
    gap: mvs(13),
    marginTop: mvs(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle: {
    width: '30%',
    minHeight: mvs(53),
    // alignItems: 'center',
    justifyContent: 'center',
    borderWidth: mvs(2),
    borderColor: colors.blue,
  },
  textStyle: {
    fontSize: mvs(12),
    fontFamily:'Nunito-Bold',
  },
  // grade:{
  //   marginHorizontal:mvs(18)
  // }
});
export default styles;
