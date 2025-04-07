import {View} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {colors} from '../../config/colors';
import { mvs } from '../../config/metrices';

const CalendarEvent = () => {
  const [selected, setSelected] = useState('');

  return (
   
      <Calendar
        style={{
          paddingHorizontal: mvs(10),
          paddingVertical: mvs(20),
          height: mvs(350),
          upperCaseHeader: true,
          // fontFamily:'Nunito-Black',
          // fontWeight:'700'
        }}
        theme={{
          selectedDayBackgroundColor: colors.darkblue,
          textSectionTitleColor: colors.black,
          selectedDayTextColor: '#ffffff',
          dayTextColor: 'black',
          upperCaseHeader: true,
        }}
        onDayPress={day => {
          setSelected(day.dateString);
          console.log(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />
 
  );
};

export default CalendarEvent;
