/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, LogBox, } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider as StoreProvider } from "react-redux";
import {
  Provider as PaperProvider,
} from "react-native-paper";
import store from "./src/reducers/store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./src/navigation/DrawerContent";
import Home from "./src/pages/home/Home";
import Discover from "./src/pages/discover/Discover";
import Profile from "./src/pages/profile/Profile";
import SplashScreen from "./src/pages/SplashScreen";
import ScreenOne from "./src/pages/ScreenOne";
import ScreenTwo from "./src/pages/ScreenTwo";
import ScreenThree from "./src/pages/ScreenThree";
import Signup from "./src/pages/signup/Signup";
import Login from "./src/pages/signin/Login";
import Setting from "./src/pages/settings/Setting";
import Payment from "./src/pages/payment/Payment";
import Congrats from "./src/pages/congrats/Congrats";
import Ratings from "./src/pages/rating/Ratings";


LogBox.ignoreLogs(["Reanimated 2"]);
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

const DrawerScreen = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabScreen} />
    </Drawer.Navigator>
  );
};

const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: "#fff"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center" }}>
                <Icon
                  name="home"
                  size={28}
                  color={focused ? "#bad759" : "black"}
                />
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center" }}>
                <Icon
                  name="map-pin"
                  size={28}
                  color={focused ? "#bad759" : "black"}
                />
              </View>
            );
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center" }}>
                <Icon
                  name="user"
                  size={28}
                  color={focused ? "#bad759" : "black"}
                />
              </View>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};

const App: () => Node = () => {
  const Stack = createStackNavigator();
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 1000,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.09,
      restSpeedThreshold: 0.09
    }
  };
  // useEffect(async () => {
  //   const jsonValue = await AsyncStorage.getItem("user");
  //   const result = jsonValue != null ? JSON.parse(jsonValue) : null;
  //   console.log("user", result);
  //   setAuth(result?.user?._id);
  // });

  return (

    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            headerMode="none"
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              transitionSpec: {
                open: config,
                close: config
              }
            }}
          >
            {/* {auth == null ? (<> */}
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="One" component={ScreenOne} />
            <Stack.Screen name="Two" component={ScreenTwo} />
            <Stack.Screen name="Three" component={ScreenThree} />

            <Stack.Screen name="Register" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            {/* </>):(
               <> */}

            <Stack.Screen name="Home" component={DrawerScreen} />
            <Stack.Screen name="Discover" component={DrawerScreen} />
            <Stack.Screen name="Profile" component={DrawerScreen} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Congrats" component={Congrats} />
            <Stack.Screen name="Ratings" component={Ratings} />

            {/* </>
               )} */}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
