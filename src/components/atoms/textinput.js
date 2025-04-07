import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Textinput = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  newstyle,
  containerStyle,
  textStyle,
  icon=false,
  option,
  leftIcon=false,
  editable,
  error,
  errortext,
  placeholderTextColor,
  multilines=true,
}) => {
  return (
    <View>
    <KeyboardAwareScrollView>
      <View style={[styles.container, containerStyle]}>
        <>{icon}</>
        {/* <View style={option ? styles.optioncontainer : null}>  */}
          <TextInput
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={[styles.input, newstyle]}
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.lightdark2} 
            editable={editable}
            multiline={multilines}
      
            // placeholderTextColor={Colors.red}
          />
          <>{leftIcon}</>
          <>
            {option ? <Text style={{color: colors.red,}}>optional</Text> : null}
          </>
        </View> 
        </KeyboardAwareScrollView>
      {/* </View> */}
      <Text style={[styles.errorText, errortext]}>{error ? error : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: mvs(12),
    // height: mvs(50),
    borderRadius: mvs(5),
    borderColor: colors.blue,
    // backgroundColor: colors.red,
    borderWidth: mvs(1),
    // flex:1,
    // height:50
    paddingHorizontal: mvs(15),
    gap:mvs(5),
    justifyContent:'center'
  },
  input: {
    // height: mvs(40),
    width:'55%',
    fontSize: mvs(16),
    // paddingHorizontal: mvs(10),
    // marginTop: mvs(6),
    // textAlign: 'center',
    // flex:1,
    // backgroundColor:'yellow',
    flexGrow:1,
    
    
  },
  optioncontainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // // backgroundColor:'red',
    // // flexGrow: 1,
    // alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    top: 0,
  },
});

export default Textinput;

