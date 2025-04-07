import { StyleSheet } from "react-native"
import { mvs } from "../../config/metrices"
import { colors } from "../../config/colors"
const styles = StyleSheet.create({
    container: {
        // flex:1,
        padding:mvs(20)
    },
    header:{
        flexDirection:'row'
    },
    image:{
        width:mvs(35),
        height:mvs(35),
    },
    textcontainer:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonstyle2: {
        width: mvs(26),
        height: mvs(26),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      },
    text:{
        color:colors.black,
        fontSize:mvs(22)
    },
    text2:{
        fontSize:mvs(16),
        color:colors.black,
        marginTop:mvs(20)
    },
    buttonstyle:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        backgroundColor:colors.white,
        justifyContent:'space-between',
        marginTop:mvs(15),
        height:mvs(50)
    },
    textStyle:{
        color:colors.black,
        fontSize:mvs(12)
    },
    firstcontainer:{
        flexDirection:'row',
        justifyContent:'center',
        gap:mvs(15)
    },
    logoutcontainer:{
        marginTop:mvs(50)
    }
})
export default styles