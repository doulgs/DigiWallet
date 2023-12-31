import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Auth } from "../pages/Auth";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
