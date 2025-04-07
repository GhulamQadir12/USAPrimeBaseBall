import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        padding:mvs(20),
        backgroundColor:colors.white,
    },
  buttonstyle2: {
    width: mvs(26),
    height: mvs(26),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flexDirection:'row',
    gap:mvs(20),
alignItems:'center' ,
marginTop:mvs(20),

 },
 text:{
    fontSize:mvs(22),
    color:colors.black,
    fontFamily:'Nunito-Bold',
    fontWeight:'700'
 },
 textinputcontainer:{
    marginVertical:mvs(30),
 },
 timecontainer:{
    flexDirection:'row',
 },
 text:{
    fontSize:mvs(16),
    color:colors.black, 
 },
 buttonstyle:{
   width:'60%',
 },
 input:{
   borderColor:colors.red,
borderWidth:1,
 }

});
export default styles;
