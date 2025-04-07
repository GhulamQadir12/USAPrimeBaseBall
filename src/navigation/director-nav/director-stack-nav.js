import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoachPlayerListing from '../../screens/coach-player-listing/index';
import DirectorChat from '../../screens/director-chat/index';
import DirectorProfile from '../../screens/director-profile/index';
import DirectorSetting from '../../screens/director-setting/index';
import DirectorEditProfile from '../../screens/director-edit-profile/index';
import MyDrawer from './drawer-nav';
import DirectorLive from '../../screens/director-livestreamimg/index';
import DirectorLiveComments from '../../screens/director-live-comment/index';


const Stack = createNativeStackNavigator();


const Directornavigation = () => {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
         <Stack.Screen name="DirectorChatHome" component={MyDrawer} />
       <Stack.Screen name="DirectorChat" component={DirectorChat} />
        <Stack.Screen name="CoachPlayerListing" component={CoachPlayerListing} />
        <Stack.Screen name="DirectorProfile" component={DirectorProfile} />
       <Stack.Screen name="DirectorSetting" component={DirectorSetting} />
       <Stack.Screen name="DirectorEditProfile" component={DirectorEditProfile} />
       <Stack.Screen name="DirectorLive" component={DirectorLive} />
       <Stack.Screen name="DirectorLiveComments" component={DirectorLiveComments} />

      </Stack.Navigator>
  )
}

export default Directornavigation 