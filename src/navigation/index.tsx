import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppTabNavigation from './AppTabNavigation';

const RootNavigation = () => {

  return (
    <NavigationContainer>
      <AppTabNavigation />
    </NavigationContainer>
  );
}

export default RootNavigation;
