import { StyleSheet } from "react-native"
import { mvs } from "../../config/metrices"
import { colors } from "../../config/colors"
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:mvs(20),
        backgroundColor:colors.white
    },
    textcontainer:{
        paddingTop:mvs(20),
        gap:mvs(20)
    },
    buttonstyle2: {
      width: mvs(26),
      height: mvs(26),
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:mvs(20)
    },
    text:{
        color:colors.black,
        fontSize:mvs(26),
        fontWeight:'400',
        fontFamily:'NUnito-Black'

    },
    text2:{
        color:'#B7C6D9',
        fontSize:mvs(13.3),
        fontWeight:'500',
        marginVertical:mvs(5),
        fontFamily:'NUnito-Black'

    },
    containerStyle:{
        borderColor:colors.lightdark,
        marginTop:mvs(20)
    },
    buttonstyle:{
        width:'60%',
        alignSelf:'center',
        marginTop:mvs(130)
    },
    textstyle:{
      color:colors.white,
      fontSize:mvs(18),
      fontWeight:'600',
      alignSelf:'center'
    },
      // index 2 Styling
      headermaincontainer:{
        flexDirection:'row',
      },
      headercontainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1
      },
  text3:{
    color:colors.black,
    fontSize:mvs(22),
    fontWeight:'700',
    fontFamily:'NUnito-Black'

  },
  emailtext:{
    color:colors.black,
    fontSize:mvs(32),
    // alignSelf:'center',
    padding:mvs(25),
    fontWeight:'400',
    fontFamily:'NUnito-Black',
    left:mvs(15)

  },
  desText:{
    color:colors.black,
    fontSize:mvs(14.48),
    textAlign:'center',
    fontWeight:'400',
    fontFamily:'NUnito-Black'

  },
  image:{
    width:mvs(300),
    height:mvs(190),
    alignSelf:'center',
    marginVertical:mvs(30)

  }
})
export default styles