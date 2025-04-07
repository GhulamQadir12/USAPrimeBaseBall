import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:mvs(20),
        backgroundColor:colors.white
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    image: {
    width: mvs(40),
    height: mvs(40),
  },
  image1: {
    width: mvs(20),
    height: mvs(20),
  },
  text:{
    color:colors.black,
    fontSize:mvs(18),
    fontWeight:'700',
    fontFamily:'Nunito-Bold'
  },
  logocontainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:mvs(10)
  },
  iconscontainer:{
    flexDirection:'row',
    gap:mvs(15),
    alignItems:'center',
    alignSelf:'flex-end',
    justifyContent:'center',
    marginBottom:mvs(5)

  },
  buttonstyle:{
    width:'50%',
    // backgroundColor:colors.blue,
    borderRadius:mvs(30),
    elevation:0
  },
  switchcontainer:{
    flexDirection:'row',
    backgroundColor:'#1C31666B',
    marginVertical:mvs(20),
    borderRadius:mvs(30)

  },
  // buttonstyle2:{
  //   width:'20%',
  //   backgroundColor:colors.white,
  //   elevation:0,
  //   alignSelf:'flex-end'
  // }
})
export default styles;