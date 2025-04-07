import {View, Text} from 'react-native';
import React from 'react';
import Splash from '../screens/splash-screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login-screens/index';
import Login2 from '../screens/login2-screens/index';
import Signup from '../screens/signup-screen/index';
import Option from '../screens/option-screen/index';
import Playernavigation from './player-nav/player-stack-nav';
import PlayerChatSystemNotification from '../screens/player-chat-system-notification/index';
import PlayerSetting from '../screens/player-setting/index';
import PlayerResetPassword from '../screens/player-reset-password/index';
import PlayerEmail from '../screens/player-email/index';
import PlayerVerification from '../screens/player-verfication/index';
import PlayerVerification2 from '../screens/player-verfication/index2';
import PlayerChangePassword from '../screens/player-change-password/index';
import PlayerChangePassword2 from '../screens/player-change-password/index2';
import PlayerPopup from '../screens/player-popup/index';
import Directornavigation from './director-nav/director-stack-nav';
import Coachnavigation from './coach-nav/coach-stack-nav';
import EventCalender from '../screens/player-event-calender/index';
import ApiDataScreen from '../screens/apis-screens/index';

const Stack = createNativeStackNavigator();
const Rootnavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{title: 'Splash'}}
      />
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen name="Login2" component={Login2} options={{title: 'Login'}} />
      <Stack.Screen
        name="PlayerChatSystemNotification"
        component={PlayerChatSystemNotification}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Option"
        component={Option}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Playernavigation"
        component={Playernavigation}
        options={{title: 'Login'}}
      />
      <Stack.Screen name="PlayerSetting" component={PlayerSetting} />
      <Stack.Screen
        name="PlayerResetPassword"
        component={PlayerResetPassword}
      />
      <Stack.Screen name="PlayerEmail" component={PlayerEmail} />
      <Stack.Screen name="PlayerVerification" component={PlayerVerification} />
      <Stack.Screen name="PlayerVerification2" component={PlayerVerification2} />
      <Stack.Screen
        name="PlayerChangePassword"
        component={PlayerChangePassword}
      />
      <Stack.Screen
        name="PlayerChangePassword2"
        component={PlayerChangePassword2}
      />
      <Stack.Screen name="PlayerPopup" component={PlayerPopup} />
      <Stack.Screen name="Directornavigation" component={Directornavigation} />
      <Stack.Screen name="Coachnavigation" component={Coachnavigation} />
      <Stack.Screen name="EventCalender" component={EventCalender} />
      <Stack.Screen name="ApiDataScreen" component={ApiDataScreen} />
    </Stack.Navigator>
  );
};

export default Rootnavigation;
