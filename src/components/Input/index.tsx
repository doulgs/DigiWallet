import React from "react";
import { TextInputProps } from "react-native";

import { Input as InputStyled } from "./styles";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const { colors } = useTheme();
  return (
    <InputStyled
      autoCapitalize="none"
      placeholderTextColor={colors.background[300]}
      {...rest}
    />
  );
};

export { Input };
