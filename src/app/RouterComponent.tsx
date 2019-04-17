/* React */
import React from 'react';
import { Modal, Router, Scene, Stack, Tabs } from 'react-native-router-flux';

/* Local */
import { LoginScreen } from '@screens/auth/login/LoginScreen';
import { RegisterScreen } from '@screens/auth/register/RegisterScreen';
import { HomeScreen, MapScreen } from '@screens/home';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeIcon = () => <Icon name="home" size={30} color="#2980b9" />;
const MapIcon = () => <Icon name="map" size={30} color="#5352ed" />;

export const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Stack key="auth" hideNavBar={true}>
        <Scene key={'login'} component={LoginScreen} />
        <Scene key={'register'} component={RegisterScreen} hideNavBar={true} />
      </Stack>
      <Stack key="app" hideNavBar={true}>
        <Tabs showLabel={false}>
          <Scene key="home" component={HomeScreen} icon={HomeIcon} title="Home" />
          <Scene
            key="addpost"
            component={MapScreen}
            icon={MapIcon}
            hideNavBar={true}
            hideTabBar={true}
          />
        </Tabs>
      </Stack>
    </Stack>
  </Router>
);
