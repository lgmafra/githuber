import React from 'react';
import { View } from 'react-native';
import Header from '~/components/Header';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const Repositories = () => (
  <View>
    <Header title="Repositório" />
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repositories;
