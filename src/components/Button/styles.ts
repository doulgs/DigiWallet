import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 90%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
  height: ${(props) => props.theme.spaces.defaultHeight};
  padding: ${(props) => props.theme.spaces.defaultSpace};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colorBase.white};
  font-size: ${(props) => props.theme.spaces.fontSize};
`;
