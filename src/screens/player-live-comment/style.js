import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding:mvs(20),
        // backgroundColor:colors.white
    },
    image: {
        flex: 1,
        width:'100%',
        height:'100%',
      },
      text: {
        color: 'white',
        fontSize: mvs(42),
        lineHeight:mvs(84),
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      },
      header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:mvs(20),
        marginVertical:mvs(20)
      },
      headerinside:{
        flexDirection:'row',
        gap:mvs(20),
        alignItems:'center'
      },
      image1:{
        width:mvs(50),
        height:mvs(50)
      },
      live:{
        backgroundColor:'red',
        width:'20%',
        alignItems:'center',
        justifyContent:'center',
        height:mvs(17),
        borderRadius:mvs(5),
        alignContent:'center'      
      },
      text1:{
        fontSize:mvs(18),
        color:colors.white,
        fontWeight:'400'
      },
      text2:{
        fontSize:mvs(12),
        color:colors.white,
        fontWeight:'400'
      },
      flatlistcontainer:{
        position:'absolute',
        bottom:mvs(60),
        height:'40%'
        // backgroundColor:'red'
      },
      bottom: {
        flex:1,
        position: 'absolute',
        alignItems:"center",
        bottom: mvs(9),
        flexDirection: 'row',
        gap:mvs(20),
        // alignSelf:'center',
        paddingHorizontal:mvs(20),
        justifyContent:'space-between',
        width:'100%'
        // backgroundColor:'red'
      },
      input:{
        width:'85%',
        // height:mvs(45),
        backgroundColor:colors.white,
        borderWidth:mvs(1),
        textAlign:'left',
        borderColor:colors.lightdark,
        borderRadius:mvs(30),
        paddingHorizontal:mvs(20),
        // flexGrow:1,
        // backgroundColor:'yellow'
        minHeight:mvs(45)
      },
      // input: {
        //     borderColor: 'gray',
        //     borderWidth: 1,
        //     padding: 10,
        //     minHeight: 40,
        //     textAlignVertical: 'top', 
        //   },
      buttonstyle: {
        width: mvs(46),
        height: mvs(46),
        backgroundColor: colors.lightblue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:mvs(26)
      },
      buttonstyle2: {
        width: mvs(46),
        height: mvs(46),
        backgroundColor: '#00000000',
        alignItems: 'center',
        justifyContent: 'center',
        elevation:0
      },
 
      image2:{
        width:mvs(43),
        height:mvs(43),
    
      },

      messageText: {
        color: colors.black,
        fontSize: mvs(14),
        textAlign:'left',
        fontWeight:'400'
      },
      messageContainer1: {
        // justifyContent:'center',
        alignSelf: 'flex-start',
        marginBottom: mvs(10),
        flexDirection:'row',
        gap:mvs(15),
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        // opacity:0.6,
        // paddingHorizontal:mvs(20),

        borderRadius: mvs(79),
        maxWidth: '70%',
        minWidth: '25%',
        borderWidth:mvs(2),
        borderColor:colors.lightdark,
        marginHorizontal:mvs(20),
        alignItems:'center',
        marginVertical:mvs(5),
        flex:1,
        // backgroundColor: '#0b0b0000',

        // justifyContent:'center'
        // backgroundColor:colors.white,
      },    
      messageBubble2:{
        // flex:1,
        maxWidth: '70%',
        minWidth: '25%',
        paddingRight:mvs(8)
      },


        wrapper: {},
        slide1: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9DD6EB'
        },
        slide2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#97CAE5'
        },
        slide3: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#92BBD9'
        },
        text: {
          color: '#fff',
          fontSize: mvs(30),
          fontWeight: 'bold'
        }
    
      
})
export default styles;      