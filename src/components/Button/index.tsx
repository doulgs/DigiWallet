import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Button as ButtonStyled, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <ButtonStyled {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonStyled>
  );
};

export { Button };
