import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import CoachHome from '../../screens/coach-home-screen/index'
import PlayerProfile from '../../screens/player-profile/index'
import PlayerListing from '../../screens/player-listing/index'
import CoachPopup from '../../screens/coach-popup/index'
import CoachChat from '../../screens/coach-chat/index'
import CoachSwitchChat from '../../screens/coach-switch-chat/index'
import CoachProfile from '../../screens/coach-profile/index'
import CoachEditProfile from '../../screens/coach-edit-profile/index'
import PlayerRequest from '../../screens/player-request/index'
import PlayerDetail from '../../screens/player-detail/index'
import EventCalender from '../../screens/player-event-calender/index'
import SchduleEvent from '../../screens/schdule-event/index'
import MyDrawer from './drawer-nav';
import CoachSetting from '../../screens/coach-setting/index'
import CoachCalender from '../../screens/coachCalender/index';
import AddEvent from '../../screens/add-event/index'
import CoachLive from '../../screens/coach-livestreamimg/index';
import CoachLiveComments from '../../screens/coach-live-comment/index';

const Stack = createNativeStackNavigator();
const Coachnavigation = () => {
  

  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="CoachHome" component={MyDrawer} />
        <Stack.Screen name="CoachChat" component={CoachChat} />
        <Stack.Screen name="PlayerListing" component={PlayerListing} />
        <Stack.Screen name="CoachProfile" component={CoachProfile} />
        <Stack.Screen name="CoachSetting" component={CoachSetting} />
        <Stack.Screen name="CoachEditProfile" component={CoachEditProfile} />
        <Stack.Screen name="PlayerRequest" component={PlayerRequest} />
        <Stack.Screen name="PlayerDetail" component={PlayerDetail} />
        <Stack.Screen name="CoachCalender" component={CoachCalender} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="CoachLive" component={CoachLive} />
        <Stack.Screen name="CoachLiveComments" component={CoachLiveComments} />

        {/* <Stack.Screen name="PlayerProfile" component={PlayerProfile} />
        <Stack.Screen name="CoachPopup" component={CoachPopup} />
        <Stack.Screen name="CoachSwitchChat" component={CoachSwitchChat} />
 */}
      </Stack.Navigator>
  )
}

export default Coachnavigation 