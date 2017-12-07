import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';

import store from './app/store';
import MainNavigator from './app/navigation/MainNavigator';
import styles, { colors } from './app/styles';

const App = () => (
  <View style={styles.fillAll}>
    <StatusBar
      statusBarStyle="light-content"
      backgroundColor={colors.black}
    />
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  </View>
);

export default App;