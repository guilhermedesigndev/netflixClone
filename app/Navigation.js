import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from './components/Icons';
import * as theme from './styles/theme';

// Screens
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home-outline',
  },
  Search: {
    name: 'search-outline',
  },
  EmBreve: {
    name: 'clipboard-outline',
  },
  Dowloads: {
    name: 'download-outline',
  },
  Mais: {
    name: 'menu-outline',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#121212',
          borderTopColor: 'rgba(0, 0, 0, 0.8)',
          height: 60,
          paddingTop: 10,
          borderBottomWidth: 10,
          borderBottomColor: '#121212',
        },
        activeTintColor: theme.colors.white,
        inactiveTintColor: '#787878',
      }}>
      <Tab.Screen name="Home" component={Home} options={{title: 'Início'}} />
      <Tab.Screen name="Search" component={Home} options={{title: 'Buscas'}} />
      <Tab.Screen
        name="EmBreve"
        component={Home}
        options={{
          title: 'Em breve',
          tabBarBadge: 5,
          tabBarBadgeStyle: {marginTop: -5},
        }}
      />
      <Tab.Screen
        name="Dowloads"
        component={Home}
        options={{title: 'Downloads'}}
      />
      <Tab.Screen name="Mais" component={Home} options={{title: 'Mais'}} />
    </Tab.Navigator>
  );
}
