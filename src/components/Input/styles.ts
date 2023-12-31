import styled from "styled-components/native";

export const Input = styled.TextInput`
  width: 90%;
  height: ${(props) => props.theme.spaces.defaultHeight};
  border-width: 0.7px;
  border-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
  background-color: ${(props) => props.theme.colors.background[800]};
  padding-left: 16px;
  padding-right: 16px;
  color: ${(props) => props.theme.colors.background[50]};
`;
