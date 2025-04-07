import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: mvs(20),
    backgroundColor: colors.white,
  },
  image: {
    width: mvs(30),
    height: mvs(30),
  },
  header: {
    flexDirection: 'row',
    gap: mvs(20),
    alignItems:'center'
  },
  text: {
    fontSize: mvs(24),
    color: colors.black,
    fontFamily:'Nunito-Bold',
    fontWeight:'700'
  },
  flatlistcontainer:{
    // backgroundColor:'red',
    // flexGrow:1,
    height:'85%',
    paddingBottom:mvs(20)

    // marginBottom:mvs(50)
    // flex:1
  },
  bottom: {
    flex:1,
    position: 'absolute',
    // alignItems:"center",
    bottom: mvs(9),
    flexDirection: 'row',
    // gap:mvs(20),
   marginHorizontal:mvs(20),
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    backgroundColor:colors.white
  },
  input:{
    width:'67%',
    // height:mvs(45),
    backgroundColor:colors.white,
    borderWidth:1,
    textAlign:'left',
    borderColor:colors.lightdark,
    borderRadius:mvs(50),
    paddingHorizontal:mvs(20),
    minHeight:mvs(45)
    // flexGrow:1,
    // minWidth:mvs(10)
    // backgroundColor:'yellow'
  },
  buttonstyle: {
    width: mvs(46),
    height: mvs(46),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:mvs(26)
  },
  buttonstyle2: {
    width: mvs(26),
    height: mvs(26),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageContainer: {
    justifyContent:'center',
    alignSelf: 'flex-end',
    marginBottom: 10,
    flexDirection:'row',
     gap:mvs(15)
  },
  messageContainer1: {
    justifyContent:'center',
    alignSelf: 'flex-start',
    marginBottom: mvs(10),
    flexDirection:'row',
    gap:mvs(15)
  },
  // messageBubble: {
  //   // textAlign:'right',
  //   // backgroundColor: '#0078fe',
  //   padding: mvs(10),
  //   maxWidth: '70%',
  //   minWidth: '25%',
  //   // backgroundColor:'red',
  //   // alignSelf: 'flex-end',
  //   marginBottom: mvs(10),
  // },
  image2:{
    width:mvs(43),
    height:mvs(43),

  },
  lineragradient:{
    borderRadius: mvs(20),
    padding: mvs(10),
    maxWidth: '70%',
    minWidth: '20%',
    // backgroundColor:'red',
    // alignSelf: 'flex-end',
    marginBottom: mvs(10),

  },
  messageBubble2: {
    backgroundColor: '#0078fe',
    padding: mvs(10),
    borderRadius: mvs(20),
    maxWidth: '70%',
    minWidth: '25%',
    borderWidth:mvs(2),
    borderColor:colors.lightdark,
    backgroundColor:colors.white,
    // alignSelf: 'flex-end',
    marginBottom: mvs(10),
  },
  messageText: {
    color: colors.black,
    fontSize: 12,
    textAlign:'left',
    fontWeight:'600',
    fontFamily:'Nunito-Bold'

  },
  messageText2: {
    color: colors.white,
    fontSize: 12,
    textAlign:'left',
    fontFamily:'Nunito',
    fontWeight:'600',
    fontFamily:'Nunito-Bold'
  },
  // messageText2: {
  //   color: 'white',
  //   fontSize: 16,
  //   textAlign:'left',
  //   justifyContent:'space-evenly'
  // },

  // pickedImage: {
  //   width: mvs(100),
  //   height: mvs(100),
  //   borderRadius: mvs(50),
  //   alignSelf: 'center',
  //   marginBottom: mvs(20),
  // },
});
export default styles;
