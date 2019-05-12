import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';

AsyncStorage.clear();

const Repositories = () => (
  <View>
    <Text>Repositories</Text>
  </View>
);

export default Repositories;
