import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(20),
    backgroundColor: colors.white,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: mvs(29),
    marginTop: mvs(35),
    marginBottom: mvs(29),
  },
  maintext: {
    fontFamily:'Nunito-Bold'
  },
  text: {
    fontSize: mvs(35.32),
    color: colors.red,
    fontWeight: '700',
  },
  text2: {
    fontSize: mvs(16),
    color: colors.black,
    fontWeight: '600',
  },
  buttontext: {
    fontSize: mvs(16),
    color: colors.white,
    fontWeight: '600',
  },
  image: {
    width: mvs(110),
    height: mvs(108),
  },
  image2: {
    width: mvs(50),
    height: mvs(50),
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: mvs(20),
    gap: mvs(20),
    marginVertical: mvs(5),
  },
  button: {
    // position: 'absolute',
    bottom: mvs(40),
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    // backgroundColor: colors.white,
  },
  buttonstyle: {
    width: '80%',
  },
  endtext: {
    fontSize: mvs(12),
    color: colors.black,
    fontWeight: '400',
  },
});

export default styles;
