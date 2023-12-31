import React from "react";
import {
  Area,
  AreaTask,
  Container,
  Content,
  ContentTask,
  Separator,
  SubTitle,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { Icon } from "../Icon";

interface Props {
  bedge: number;
}

const TopBar: React.FC<Props> = ({ bedge }) => {
  const { colorBase } = useTheme();

  return (
    <Container>
      <ContentTask>
        <Icon iconName={"card-outline"} size={32} color={colorBase.white} />
        <Separator style={{ marginLeft: 24 }} />
        <AreaTask>
          <Title>
            Você tem {bedge} contas {"\n"}
            cadastradas para pagar.
          </Title>
        </AreaTask>
      </ContentTask>
    </Container>
  );
};

export { TopBar };
