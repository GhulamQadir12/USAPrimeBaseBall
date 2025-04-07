import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(20),
  },
  header: {
    flexDirection: 'row',
    gap: mvs(80),
    marginTop:mvs(10)
  },
  headerText: {
    fontSize: mvs(22),
    color: colors.black,
    fontFamily:'Nunito-Bold',
    fontWeight:'700'

  },
  text: {
    fontSize: mvs(16),
    color: colors.black,
    marginTop: mvs(30),
    fontFamily:'Nunito-Bold',
    fontWeight:'400'

  },
  buttonstyle2: {
    width: mvs(26),
    height: mvs(26),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileimage: {
    width: '70%',
    height: mvs(100),
    borderRadius: 50,
  },
  piccontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: mvs(20),
    // backgroundColor:'red',
    width:'30%',
    alignSelf:'center'
  },
  buttoncontainer: {
    flexDirection: 'row',
    gap: mvs(10),
  },
  buttonstyle: {
    width: mvs(125),
    height: mvs(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: mvs(2),
    borderColor: colors.blue,
  },
  buttonstyle2:{
    width:'60%',
    alignSelf:'center',
    // bottom:mvs(80)
  },
  textStyle: {
    fontSize: mvs(12),
    fontFamily:'Nunito-Bold',
    fontWeight:'400'

  },
  containerStyle: {
    backgroundColor: colors.pink,
    borderWidth: mvs(0),
    marginVertical: mvs(5),
  },
  inputcontainer: {
    marginTop: mvs(20),
    flex: 1, 
    // flexGrow:1
  },

  // index 2 Styling

  text3:{
    color:colors.black,
    fontSize:mvs(22),
    fontFamily:'Nunito-Bold'

  },
  errortext:{
    top:-6
  }
});

export default styles;
