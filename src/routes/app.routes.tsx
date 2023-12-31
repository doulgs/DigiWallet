import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { Movement } from "../pages/Movement";
import { Extract } from "../pages/Extract";

import { Icon } from "../components/Icon";
import { useTheme } from "styled-components/native";
import { ImageBackground, View } from "react-native";

const Tab = createBottomTabNavigator();

function AppRoutes() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          height: 55,
          marginHorizontal: 80,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.background[300],
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inico",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Movement"
        component={Movement}
        options={{
          tabBarLabel: "Movimentação",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <>
              <View
                style={{
                  width: 56,
                  height: 56,
                  top: -15,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  backgroundColor: "#5B3DA7",
                }}
                //source={require("../assets/GradientButton.png")}
                //resizeMode="contain"
              >
                <Octicons name={"diff-added"} size={24} color={"#FFF"} />
              </View>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Extract"
        component={Extract}
        options={{
          tabBarLabel: "Extrato",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"receipt-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
