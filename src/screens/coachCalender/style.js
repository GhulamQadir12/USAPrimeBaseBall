import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding:mvs(20),
        backgroundColor: colors.white,
    },
    header:{
        flexDirection:'row',
        gap:mvs(15),
        marginTop:mvs(20)
    },
    text:{
        fontSize:mvs(22),
        color:colors.black,
        fontWeight:'700',
        fontFamily:'Nunito-Regular'
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
        fontSize:mvs(16.41),
             fontWeight:'700',
        fontFamily:'Nunito-Regular'
    },
    textweek:{
        color:colors.black,
        fontSize:mvs(12),
        
    },
    buttonstyle2: {
        width: mvs(26),
        height: mvs(26),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconcontainer:{
        backgroundColor:colors.white,
        marginTop:mvs(35),
        width:'10%',
        height:mvs(37),
        borderRadius:mvs(35),
        alignItems:'center',
        justifyContent:'center',
        borderWidth:mvs(1),
        alignSelf:'flex-end'
      },
      flatlistcontainer:{
        flex:0.95
      }
})
export default styles