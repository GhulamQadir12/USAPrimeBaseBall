import { StyleSheet } from "react-native"
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:mvs(20),
        backgroundColor: colors.white,
    },
    headercontainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerinsidecontainer:{
        flexDirection:'row',
        // flex:1,
        gap:mvs(10)
    },
    image:{
        width:mvs(25),
        height:mvs(25)
    },
    text:{
        fontSize:mvs(22),
        color:colors.black,
        fontWeight:'700',
        fontFamily:'Nunito-Bold'

    },
    body:{
        flexDirection:'row',
        justifyContent:'center',
        gap:mvs(10),
        alignItems:'center',
    },
    text2:{
        color:colors.black,
        fontSize:mvs(12),
        fontWeight:'400',
        fontFamily:'Nunito-Bold'

    },
    buttonstyle2: {
        width: mvs(26),
        height: mvs(26),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      },
    text3:{
        color:colors.black,
        fontSize:mvs(26.4),
        fontWeight:'700',
        fontFamily:'Nunito-Bold'

    },
    image2:{
        width:mvs(150),
        height:mvs(155),
        
    },
    // scrollview:{

    //     backgroundColor:'green',
    //     // height:20
    // },
    imagecontainer:{
        width:mvs(117),
        height:mvs(160),
        alignItems:'center',
        borderWidth:mvs(1),
        borderColor:colors.red,
        borderRadius:mvs(5),
        paddingBottom:mvs(8)
    },
    buttonstyle:{
        width:mvs(140),
        height:mvs(40),
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:{} colors.white,
        marginVertical:mvs(25),
        borderWidth:mvs(2),
        borderColor:colors.blue,
        borderRadius:mvs(5),
    },
 
    textStyle:{
        fontSize:mvs(12),
        color:colors.black,
        fontWeight:'400',
        fontFamily:'Nunito-Bold'

    },
    buttoncontainer:{
        flexDirection:'row',
        gap:mvs(10),
    },
    image3:{
        width:mvs(25),
        height:mvs(25)
    },
    cardstyle:{
        backgroundColor:colors.pink,
        paddingHorizontal:mvs(20),
        paddingVertical:mvs(10),
        borderRadius:mvs(5),
        flexDirection:'row',
        gap:mvs(10),
        alignItems:'center',
        // marginTop:mvs(15)
    },
    cardscontainer:{
        gap:mvs(15)
    },
    physiccontainer:{
        gap:mvs(15)
    },

})
export default styles;