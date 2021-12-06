import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabScreenSearcher from './components/Searcher/TabScreenSearcher';
import TabScreenMainScreen from './components/MainScreen/TabScreenMainScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Searcher"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = "home"
            } else if (route.name === 'Searcher') {
              iconName = "search"
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarShowLabel: false
        })}
      >
        <Tab.Group screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#EA580C",
          },
        }}
        >
          <Tab.Screen name="Main" component={TabScreenMainScreen} />
          <Tab.Screen name="Searcher" component={TabScreenSearcher} />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

