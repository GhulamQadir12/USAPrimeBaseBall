import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor:colors.white
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:mvs(10)
  },
  image: {
    width: mvs(70),
    height: mvs(70),
},
image2: {
  marginTop: mvs(15),
  width: mvs(30),
  height: mvs(30),
},
  image3: {
    width: mvs(20),
    height: mvs(20),
  },
text:{
  fontFamily:'Nunito-Bold',
  color:colors.black,
  fontWeight:'600'
},
text2:{
  fontSize:mvs(22)
},
schdulecontainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingVertical:mvs(25)
},
text3:{
  alignSelf:'flex-end',
  color:colors.black,
  top:-10,
  fontFamily:'Nunito-Bold',

},
text4:{
  alignSelf:'flex-end',
  color:colors.black,
  top:0,
  fontFamily:'Nunito-Bold',

},
infocontainer:{
  marginTop:mvs(15),
  gap:mvs(15),
  justifyContent:'center',
  // flex:1
}
});
export default styles;
