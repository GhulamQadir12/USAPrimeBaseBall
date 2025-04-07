import { StyleSheet } from "react-native"
import { mvs } from "../../config/metrices"
import { colors } from "../../config/colors"
const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        padding:mvs(20),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white
    },
    text:{
        fontSize:mvs(27.3),
        color:colors.black,
        marginTop:mvs(10),
        fontWeight:'400',
        fontFamily:'Nunito-Bold'
    },
    text2:{
        fontSize:mvs(13.65),
        color:colors.black,
        marginTop:mvs(10),
         textAlign:'center',
         fontWeight:'400',
         fontFamily:'Nunito-Bold'
        },
    textcontainer:{
        width:'50%',
        alignSelf:'center',

    },
    image:{
        width:mvs(314),
        height:mvs(281),
    }
})
export default styles