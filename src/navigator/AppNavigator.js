import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import { Routes } from '../constants/RouteConstants';
import { AppColors } from '../constants/AppColors';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={Routes.HOME_MAIN}
        component={HomeScreen}
        options={{ title: Routes.COUNTRIES }}
      />
      <HomeStack.Screen
        name={Routes.DETAILS}
        component={DetailsScreen}
        options={{
          headerBackTitle: Routes.DETAILS,
          headerTitleStyle: { color: AppColors.white},
          headerBackTitleStyle: { color: AppColors.black },
        }}
      />
    </HomeStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Routes.HOME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === Routes.HOME) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === Routes.ABOUT) {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: AppColors.black,
          tabBarInactiveTintColor: AppColors.gray ,
        })}
      >
        <Tab.Screen name={Routes.HOME} component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name={Routes.FAVORITES} component={FavoritesScreen} />
        <Tab.Screen name={Routes.ABOUT} component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
