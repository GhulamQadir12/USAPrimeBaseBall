import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';

const Touchable = ({
  onPress,
  image,
  title,
  button,
  textStyle,
  buttonstyle,
  icon,
  leftImage,
  firstcontainer,
  icon2
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, buttonstyle]}>
    <View style={firstcontainer}>
    <>
      {
        leftImage ? <Image resizeMode='contain' style={image} source={leftImage} /> : null 
      }
    </>
    <>{title ? <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
      : null
    }</>
    </View>
    <>
      {icon ? <Image resizeMode="contain" style={image} source={icon} /> : null}
    </>
    <>
      {icon2 ? icon2 : null}
    </>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.red,
    borderRadius: mvs(10),
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(12),
    // width: mvs(310),
    width:'100%'
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    // fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily:'Nunito-Black'
    // textTransform: 'uppercase',
  },
});

export default Touchable;
