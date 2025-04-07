import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
  

  const DropdownComponent = ({Data,onChange}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          // <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          //   {/* Dropdown label */}
          // </Text>
          <View></View>
        );
      }
      return null;
    };

    return (
      <View>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Data}
          search
          maxHeight={mvs(220)}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'State' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
          onChange(item.value);  
          setIsFocus(false);
        }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? 'blue' : 'black'}
          //     name="Safety"
          //     size={20}
          //   />
          // )}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      height: mvs(50),
      borderColor: colors.blue,
      borderWidth: mvs(2),
      borderRadius: mvs(8),
      paddingHorizontal: mvs(23),
      marginVertical:mvs(18)
    },
    icon: {
      marginRight: mvs(5),
    },
    // label: {
    //   position: 'absolute',
    //   backgroundColor: 'white',
    //   left: 22,
    //   top: 8,
    //   zIndex: 999,
    //   paddingHorizontal: 8,
    //   fontSize: 14,
    // },
    placeholderStyle: {
      fontSize: mvs(16),
      color:colors.black
    },
    selectedTextStyle: {
      fontSize: mvs(16),
      color:colors.black

    },
    iconStyle: {
      width: mvs(20),
      height: mvs(20),
    },
    inputSearchStyle: {
      height: mvs(40),
      fontSize: mvs(16),
    },
  });