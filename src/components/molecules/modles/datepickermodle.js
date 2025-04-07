import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Fontisto from 'react-native-vector-icons/Fontisto';
import { colors } from "../../../config/colors";
import { mvs } from "../../../config/metrices";
import moment from 'moment';

const DateTimePicker = ({ onChangeText }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onChangeText(moment(date).format('YYYY-MM-DD'));  // Pass formatted date back to parent
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <Fontisto name="date" color={colors.red} size={mvs(25)} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimePicker;


// import React, { useState } from "react";
// import { Button, TouchableOpacity, View } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import { colors } from "../../../config/colors";
// import { mvs } from "../../../config/metrices";


// const DateTimePicker = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     onChangeText(moment(date).format('YYYY-MM-DD'));
//     hideDatePicker();
//   };

//   return (
//     <View>
//     <TouchableOpacity  onPress={showDatePicker}>
//     <Fontisto name="date" color={colors.red} size={mvs(25)} />
//     </TouchableOpacity>
//       {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </View>
//   );
// };

// export default DateTimePicker;