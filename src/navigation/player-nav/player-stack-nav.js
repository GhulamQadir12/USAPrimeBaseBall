import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlayerChatHome from '../../screens/player-chat-system-home/index'
// import PlayerChatSystemChat from '../screens/player-chat-system-chat/index'
import PlayerChatSystemPersonChat from '../../screens/player-chat-system-Personchat/index';
import PlayerProfile from '../../screens/player-profile/index'
import EventCalender from '../../screens/player-event-calender/index'
import PlayerEditProfile from '../../screens/player-edit-profile/index'
import PlayerLive from '../../screens/player-livestreamimg/index';
import PlayerLiveComments from '../../screens/player-live-comment/index';
import MyTabs from './tab-navigation';
import MyDrawer from './drawer-nav';

const Stack = createNativeStackNavigator();
const Playernavigation = () => {

  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="PlayerChatHome" component={MyDrawer} options={{title: 'Welcome'}} />
        <Stack.Screen name="PlayerLiveComments" component={PlayerLiveComments} />
        <Stack.Screen name="PlayerChatSystemPersonChat" component={PlayerChatSystemPersonChat} />
        <Stack.Screen name="PlayerProfile" component={PlayerProfile} />
        <Stack.Screen name="PlayerLive" component={PlayerLive} />
        <Stack.Screen name="PlayerEditProfile" component={PlayerEditProfile} />
  </Stack.Navigator>
  )
}

export default Playernavigation 