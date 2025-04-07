import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';
import moment from 'moment';

const DateTimeModal = ({mode}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateTimeValues, setDateTimeValues] = React.useState('2024-02-02 15:32:23');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDateTimeValues(date);
    console.warn('A date has been picked: ', date);

    hideDatePicker();
  };
  console.log('klasf', dateTimeValues);
  return (
    <View style={{gap:mvs(50)}}>
    <View style={styles.dateShower}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
      <Text>
        {JSON.stringify(moment(dateTimeValues).format('YYYY-MM-DD HH:mm:ss'))}
      </Text>
      </View>
      <View style={styles.dateShower}>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.text}>End</Text>
      </TouchableOpacity>
      <Text>
        {JSON.stringify(moment(dateTimeValues).format('YYYY-MM-DD HH:mm:ss'))}
      </Text>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimeModal;

const styles = StyleSheet.create({
  text: {
    fontSize: mvs(16),
    color: colors.black,
  },
  dateShower:{
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'red',
    width:'100%',
    alignItems:'center'
  }
});
