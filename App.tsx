import React from "react";
import { StatusBar } from "expo-status-bar";
import { AuthProvaider } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { THEME } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AuthProvaider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Routes />
        </NavigationContainer>
      </AuthProvaider>
    </ThemeProvider>
  );
}
