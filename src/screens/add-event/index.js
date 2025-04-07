import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import Touchable from '../../components/atoms/button';
import * as IMG from '../../assets/images/images';
import Textinput from '../../components/atoms/textinput';
import DateTimeModal from '../../components/atoms/dateTimePicker-compo';
const AddEvent = ({navigation}) => {
  const [value, setvalue] = React.useState();
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container} >
    {/* <View style={styles.container}> */}
      <View style={styles.header}>
        <Touchable
          leftImage={IMG.back}
          buttonstyle={styles.buttonstyle2}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Add Event</Text>
      </View>
      <View style={styles.textinputcontainer}>
        <Textinput
          onChangeText={text => setvalue(text)}
          value={value}
          placeholder="Input Title"
          keyboardType="ascii-capable"
          containerStyle={styles.input}
        />
        <Textinput
          onChangeText={text => setvalue(text)}
          value={value}
          placeholder="Input Title"
          keyboardType="ascii-capable"
          containerStyle={styles.input}
        />
      </View>
      <View style={styles.timecontainer}>
        {/* <Text style={styles.text}>
            Start
        </Text> */}
       <DateTimeModal mode={'datetime'}/>
      </View>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Touchable 
        title={'Add'}
        buttonstyle={styles.buttonstyle}
        onPress={()=>navigation.navigate('CoachCalender')}
      />
      </View>
    {/* </View> */}
    </ScrollView>
  );
};

export default AddEvent;
