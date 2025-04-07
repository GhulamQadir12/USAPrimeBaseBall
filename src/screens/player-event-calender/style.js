import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:mvs(20),
        backgroundColor: colors.white,
    },
    header:{
        flexDirection:'row',
        gap:mvs(15)
    },
    text:{
        fontSize:mvs(22),
        color:colors.black,
        fontFamily:'Nunito-Bold',
        fontWeight:'700'
    },
    calendercontainer:{
        marginVertical:mvs(5),

    },
    textcontainer:{
        marginTop:mvs(5),
        flexDirection:'row',
        alignItems:'center',
        gap:mvs(15),

    },
    texttoday:{
        color:colors.black,
        fontSize:mvs(18.41),
           fontFamily:'Nunito-Bold',
        fontWeight:'700'
    },
    textweek:{
        color:'#A7A7A7',
        fontSize:mvs(12),
           fontFamily:'Nunito-Bold',
        fontWeight:'700'
        
    },
    buttonstyle2: {
        width: mvs(26),
        height: mvs(26),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
export default styles