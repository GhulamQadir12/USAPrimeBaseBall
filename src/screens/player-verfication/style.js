import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:mvs(20),
        paddingTop:mvs(40),
        backgroundColor:colors.white
    },
    headertext:{
        fontSize:mvs(28.52),
        color:colors.black,
        alignSelf:'center',
        fontWeight:'400',
        fontFamily:'Nunito-Bold'
    },
    headerdes:{
        fontSize:mvs(18),
        color:colors.black,
        alignSelf:'center',
        textAlign:'center',
        fontFamily:'Nunito-Bold',
        marginTop:mvs(20),
        fontWeight:'400'
    },
    buttonstyle:{
        marginTop:mvs(30),
        alignSelf:'center',
        width:'80%'   ,
        fontWeight:'600'   ,
        marginBottom:mvs(20) 
    },
    textcontainer:{
      flexDirection:'row',
      marginTop:mvs(15),
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:mvs(20),
      backgroundColor:colors.white
    },
    text:{
        color:colors.black,
        fontSize:mvs(14.52),
        fontFamily:'Nunito-Bold',

    },
    buttonstyle2:{
        borderWidth:0,
        backgroundColor:colors.white,
        width:'25%',
        elevation:0,
        paddingVertical:0,
        paddingHorizontal:0,
        margin:0
    },
    textStyle:{
        color:colors.blue,
        fontFamily:'Nunito-Bold',

    },
    containerStyle:{
        marginVertical:mvs(0)
    },
    containerStyle1:{
        marginVertical:mvs(0),
        marginTop:mvs(40),
        borderRadius:mvs(7.35)
    }
})
export default styles