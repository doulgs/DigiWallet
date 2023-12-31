import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IconsProps {
  iconName: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
}

const Icon: React.FC<IconsProps> = ({ iconName, size, color, ...rest }) => {
  return <Ionicons name={iconName} size={size} color={color} {...rest} />;
};

export { Icon };
