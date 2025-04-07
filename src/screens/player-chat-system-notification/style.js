import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import { colors } from '../../config/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor:colors.white
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:mvs(44),

  },
  text:{
    color:colors.black,
    fontSize:mvs(22),
    fontWeight:'700',
    fontFamily:'Nunito-Bold'

  },
  text2:{
    color:colors.black,
    fontSize:mvs(16),
    marginTop:mvs(20),
    fontWeight:'400',
    fontFamily:'Nunito-black'


  },
 

});

export default styles;
