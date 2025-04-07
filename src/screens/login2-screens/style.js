import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
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
  text2: {
    fontSize: mvs(12),
    color: colors.black,
    fontWeight: '400',
  },
  text3: {
    fontSize: mvs(12),
    color: colors.black,
    fontWeight: '400',
    marginTop:mvs(-10)
  },
  image: {
    width: mvs(110),
    height: mvs(108),
  },
  // text2: {
  //   fontSize: mvs(13),
  //   color: colors.black,
  // },
  textContainer :{
    justifyContent:'flex-end',
    flexDirection:'row',
  },
  textcolor:{
    color:colors.red
  },
  buttoncontainer:{
    // width:mvs(250),
    // height:mvs(100),
    marginVertical:mvs(70),
    // alignSelf:'center',
    alignItems:'center',  
  },
  buttonstyle:{
    width:mvs(250),
  },
  // text2: {
  //   paddingHorizontal: mvs(30),
  //   fontSize: mvs(20),
  //   color: colors.black,
  // },
  containerStyle:{
    marginTop:mvs(5)
  },
  button: {
    // position: 'absolute',
    marginVertical:mvs(70),
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonstyle: {
    width: '80%',
  },
  endtext: {
    fontSize: mvs(12),
    color: colors.black,
    fontWeight: '400',
  },
});
export default styles;
