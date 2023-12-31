import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
  background-color: ${(props) => props.theme.colors.background[900]};
`;

export const AreaImput = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const AreaButton = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;
