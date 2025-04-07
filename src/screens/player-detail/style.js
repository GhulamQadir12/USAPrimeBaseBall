import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";
import { mvs } from "../../config/metrices";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding:mvs(20)
    },
    header: {
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        gap:mvs(60),
        marginTop:mvs(20)

      },
      text: {
        fontSize: mvs(22),
        color: colors.black,
        fontWeight: '700',
        fontFamily: 'Nunito-Bold',
      },
      piccontainer:{
        flexDirection:'row',
        // alignItems:'center'
        justifyContent:'space-between',
        marginVertical:mvs(27)
      },
      image:{
        width:mvs(130),
        height:mvs(130),
      },
      piccontainer2:{
        alignSelf:'flex-end',
        width:mvs(120),
        height:mvs(150),
        backgroundColor:colors.lightdark,
        alignItems:'center',
        justifyContent:'center',
      },
      text2: {
        fontSize: mvs(12),
        color: colors.black,
        fontFamily: 'Nunito-Regular',
        fontWeight:'400'
      },
      infocontainer:{
        flexDirection:'row',
        marginTop:mvs(20)
        // justifyContent:'space-around',
      },
      textcontainer:{
        width:'50%',
        flex:1
        // borderWidth:5,
        // borderColor:'red'
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