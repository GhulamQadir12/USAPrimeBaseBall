import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import CoachHome from '../../screens/coach-home-screen/index'
import CoachSwitchChat from '../../screens/coach-switch-chat/index'
// import PlayerChatHome from '../../screens/player-chat-system-home/index';
// import PlayerChatSystemChat from '../../screens/player-chat-system-chat/index';
import PlayerChatSystemNotification from '../../screens/player-chat-system-notification/index';

const Tab = createBottomTabNavigator();

const GradientIcon = ({ name, size, isSelected }) => {
  const gradientColors = ['#888888', '#888888']; 
  const borderColor = 'black'; 

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#FF0000" />
          <Stop offset="100%" stopColor="#0000FF" />
        </LinearGradient>
      </Defs>
      <Path
        fill={isSelected ? 'url(#grad)' : '#fff'}
        stroke={isSelected ? 'none' : borderColor} 
        strokeWidth={isSelected ? 0 : 2} 
        d={getPathData(name)} 
      />
    </Svg>
  );
};

const getPathData = (iconName) => {
  switch (iconName) {
    case 'home-sharp':
      return 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z';
    case 'chatbubble-ellipses':
      return "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"; // Example path data
    case 'notifications':
      return "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"; // Example path data
    default:
      return '';
  }
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconName;

          switch (route.name) {
            case 'CoachHome':
              iconName = 'home-sharp';
              break;
            case 'CoachSwitchChat':
              iconName = 'chatbubble-ellipses';
              break;
            case 'PlayerChatSystemNotification':
              iconName = 'notifications';
              break;
            default:
              break;
          }

          return <GradientIcon name={iconName} size={size} isSelected={focused} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black', 
        headerShown: false,
      })}
    >
      <Tab.Screen name="CoachHome" component={CoachHome} />
      <Tab.Screen name="CoachSwitchChat" component={CoachSwitchChat} />
      <Tab.Screen name="PlayerChatSystemNotification" component={PlayerChatSystemNotification} />
    </Tab.Navigator>
  );
};

export default MyTabs;
