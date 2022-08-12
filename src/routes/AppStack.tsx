import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardScreen from '../pages/Onboard';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveLift';
import StudyTabs from './StudyTabs';
import Profile from '../pages/Profile/index'

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='OnboardScreen' screenOptions={{ headerShown: false }}>
      <Screen name="OnboardScreen" component={OnboardScreen} />
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;