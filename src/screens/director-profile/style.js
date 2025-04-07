import { StyleSheet } from "react-native"
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding:mvs(20),
        backgroundColor: colors.white,
    },
    headercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:mvs(10)
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
    text1:{
        fontSize:mvs(15),
        color:colors.black,
        fontWeight:'700',
        fontFamily:'Nunito-Black'
        },
    text2:{
        fontSize:mvs(13),
        color:colors.black,
        fontWeight:'400',
        fontFamily:'Nunito-Regular'
    },
    buttonstyle2: {
        width: mvs(26),
        height: mvs(26),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image:{
        width:mvs(100),
        height:mvs(100)
      },
      profilecontainer:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:mvs(35)
      },
      cardstyle:{
        backgroundColor:colors.pink,
        paddingHorizontal:mvs(20),
        paddingVertical:mvs(10),
        borderRadius:mvs(5),
        flexDirection:'row',
        gap:mvs(10),
        alignItems:'center'
    },
    cardscontainer:{
        gap:mvs(15)
    },
    image3:{
        width:mvs(25),
        height:mvs(25)
    },
})
export default styles;