import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: mvs(20),
    backgroundColor:colors.white
  },
  header: {
    flexDirection: 'row',
  },
  image: {
    width: mvs(35),
    height: mvs(35),
  },
  textcontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle2: {
    width: mvs(26),
    height: mvs(26),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.black,
    fontSize: mvs(22),
    fontFamily: 'Nunito-Bold',
    fontWeight: '700',
  },
  text2: {
    marginVertical: mvs(25),
    color: colors.black,
    fontSize: mvs(16),
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
  },
  image: {
    width: mvs(78),
    height: mvs(78),
  },
  editimage: {
    width: mvs(15),
    height: mvs(15),
    // position:'absolute',
    // right:mvs(5),
    // top:mvs(50)
  },
  containerStyle1: {
    backgroundColor: colors.pink,
    borderColor: '#FF0000',
  },
  buttonstyle: {
    marginTop: mvs(60),
    alignSelf: 'center',
    width: '80%',
  },
  editimagecon: {
    backgroundColor: colors.white,
    borderRadius: mvs(10),
    width: '5%',
    height: '12%',
    alignItems: 'flex-end',
    justifyContent:'center',
    // position: 'absolute',
    // right: mvs(0),
    // top: mvs(50),
    bottom:30,
    left:35
  },
  input:{
    color: 'red'
  }
});

export default styles;
