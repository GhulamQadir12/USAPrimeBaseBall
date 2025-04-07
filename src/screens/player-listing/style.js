import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:mvs(20),
        backgroundColor:colors.white
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    image:{
        width:mvs(20),
        height:mvs(20),
    },
    image1:{
        width:mvs(35),
        height:mvs(35),
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