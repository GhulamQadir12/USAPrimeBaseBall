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
    marginTop:mvs(30),
    // backgroundColor:'yellow'
  },
  logocontainer:{
    flexDirection:'row',
    alignItems:'center',
    // gap:mvs(10)
    // justifyContent:'center',
  },
  image: {
    width: mvs(19),
    height: mvs(19),
},
buttonstyle:{
    backgroundColor:'#fff',
    width:mvs(70),
    height:mvs(45),
    flexDirection:'row',
    // alignItems:'center',
    justifyContent:'flex-end',
    marginTop:mvs(10),
    elevation:0
},
image2: {
    // marginTop: mvs(15),
    width: mvs(38),
    height: mvs(36),
  },
  text:{
    color:colors.black,
    fontSize:mvs(16.46),
    marginHorizontal:mvs(10),
    // marginTop:mvs(11),
    fontFamily:'Nunito-Bold'

  },
  flatlistcontainer:{
    marginTop:mvs(20)
  }
})
export default styles;