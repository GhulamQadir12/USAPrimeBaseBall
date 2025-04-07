import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './tab-navigation';
// import PlayerChatHome from '../../screens/player-chat-system-home';
import CustomDrawerContent from './customDrawer';
// import Schdule from '../screens/schdule-screens/index';
// import Tcs from '../screens/tc-screens/index';
// import Privacy from '../screens/privacy-screens/index';
// import DrawerContent from './drawer-content';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
        drawerStyle: {
          width: '100%',
        },
      // drawerLabelStyle: { marginLeft: -20 },
      drawerActiveTintColor: '#000',
      drawerInactiveTintColor: '#000',
    }}
  >
       <Drawer.Screen name="PlayerChatHome" component={MyTabs} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
