import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor:colors.white,
    // paddingBottom:mvs(10)
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:mvs(20)
  },
  image: {
    width: mvs(70),
    height: mvs(68),
},
  image2: {
    // marginTop: mvs(15),
    width: mvs(30),
    height: mvs(30),
  },
text1:{
  fontSize:mvs(31),
  fontWeight:'600',
  fontFamily:'Nunito-Bold',
  color:colors.black
},
text2:{
  fontSize:mvs(14),
  fontWeight:'600',
  fontFamily:'Nunito-Bold',
  color:colors.black
},
infocontainer:{
  marginTop:mvs(25)
}
});
export default styles;
