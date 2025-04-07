import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import * as IMG from '../../assets/images/images';
import styles from './style';
import Item from '../../components/atoms/monthlycalender-compo';
import PlayerItem from '../../components/atoms/players-compo';

const CoachHome = ({navigation}) => {
  const monthCalendar = [
    {id: 1, day: 'Mon', date: 1},
    {id: 2, day: 'Tues', date: 2},
    {id: 3, day: 'Wed', date: 3},
    {id: 4, day: 'Thurs', date: 4},
    {id: 5, day: 'Fri', date: 5},
    {id: 6, day: 'Satur', date: 6},
    {id: 7, day: 'Sun', date: 7},
    {id: 8, day: 'Mon', date: 8},
    {id: 9, day: 'Tues', date: 9},
    {id: 10, day: 'Wed', date: 10},
    {id: 11, day: 'Thurs', date: 11},
    {id: 12, day: 'Fri', date: 12},
    {id: 13, day: 'Satur', date: 13},
    {id: 14, day: 'Sun', date: 14},
    {id: 15, day: 'Mon', date: 15},
    {id: 16, day: 'Tues', date: 16},
    {id: 17, day: 'Wed', date: 17},
    {id: 18, day: 'Thurs', date: 18},
    {id: 19, day: 'Fri', date: 19},
    {id: 20, day: 'Satur', date: 20},
    {id: 21, day: 'Sun', date: 21},
    {id: 22, day: 'Mon', date: 22},
    {id: 23, day: 'Tues', date: 23},
    {id: 24, day: 'Wed', date: 24},
    {id: 25, day: 'Thurs', date: 25},
    {id: 26, day: 'Fri', date: 26},
    {id: 27, day: 'Satur', date: 27},
    {id: 28, day: 'Sun', date: 28},
    {id: 29, day: 'Mon', date: 29},
    {id: 30, day: 'Tues', date: 30},
    {id: 31, day: 'Wed', date: 31},
  ];

  const Data = [
    {
      id: 0,
      name: 'John Doe',
      image: IMG.playercoach,
      personal: 'Personal Info',
      physic: 'Physic',
      uniform: 'Uniform',
      sport: 'Sport',
    },
    {
      id: 1,
      name: 'Hello Doe',
      image: IMG.playercoach,
      personal: 'Personal Info',
      physic: 'Physic',
      uniform: 'Uniform',
      sport: 'Sport',
    },
    {
      id: 2,
      name: 'Hi Doe',
      image: IMG.playercoach,
      personal: 'Personal Info',
      physic: 'Physic',
      uniform: 'Uniform',
      sport: 'Sport',
    },
  ];

  const [selectedId, setSelectedId] = React.useState(1);

  const Renderitem = ({item}) => (
    <PlayerItem
      item={item}
      onPress={() => {
        navigation.navigate('Playernavigation', {
          screen: 'PlayerProfile',
        });
      }}
    />
  );

  const RenderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId ? ['#0000FF', '#FF0000'] : ['#fff', '#fff'];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        color={color}
        navigation={navigation}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Entypo name={'menu'} size={30} color="#aaa" />
          </TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={IMG.splash}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CoachProfile');
            }}>
            <Image
              resizeMode="contain"
              style={styles.image2}
              source={IMG.playerprofile}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.schdulecontainer}>
          <Text style={[styles.text, styles.text2]}>Your Schedule</Text>
          <Image
            source={IMG.calendar2}
            style={styles.image3}
            resizeMode="contain"
          />
        </View>
        <View>
          <FlatList
            data={monthCalendar}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            extraData={selectedId}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.text4}>View all</Text>
        <View style={styles.infocontainer}>
          <Text style={[styles.text, styles.text2]}>Plyer Info</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={Data}
            renderItem={Renderitem}
            keyExtractor={item => item.id}
            horizontal={true}
            extraData={selectedId}
          />
        </View>
        <Text style={styles.text3}>View all</Text>
      </ScrollView>
    </View>
  );
};

export default CoachHome;
