import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(20),
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
    fontFamily: 'Nunito-Black',
  },
  buttonstyle2: {
    width: mvs(26),
    height: mvs(26),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
