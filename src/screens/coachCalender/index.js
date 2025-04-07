import {View, Text, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import CalendarEvent from '../../components/atoms/calender';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Item from '../../components/atoms/eventData-compo';
import Touchable from '../../components/atoms/button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const CoachCalender = ({navigation}) => {
  const Data = [
    {
      id: 0,
      startTime: '9:00 PM',
      endTime: '9:00 PM',
      des: 'Training Session - USA Prime Baseball',
    },
    {
      id: 1,
      startTime: '9:00 PM',
      endTime: '9:00 PM',
      des: 'Training Session - USA Prime Baseball',
    },
    {
      id: 2,
      startTime: '9:00 PM',
      endTime: '9:00 PM',
      des: 'Training Session - USA Prime Baseballit over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      id: 3,
      startTime: '9:00 PM',
      endTime: '9:00 PM',
      des: 'Training Session - USA Prime Baseball',
    },
  ];

  const RenderItem = ({item}) => <Item item={item} />;

  return (
    <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
    {/* <View style={styles.container}> */}
      <View style={styles.header}>
        <Touchable
          leftImage={IMG.back}
          buttonstyle={styles.buttonstyle2}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Calendar</Text>
      </View>
      <View style={styles.calendercontainer}>
        <CalendarEvent />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.texttoday}>Today</Text>
        <Text style={styles.textweek}>Week 18</Text>
      </View>
      <View style={styles.flatlistcontainer}>
        <FlatList
          data={Data}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* <View style={styles.iconcontainer}> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddEvent')}
        style={styles.iconcontainer}>
        <AntDesign name="plus" size={mvs(24)} color={colors.red} />
      </TouchableOpacity>
      {/* </View>  */}
    {/* </View> */}
    </ScrollView>
  );
};

export default CoachCalender;
