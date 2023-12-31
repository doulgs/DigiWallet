import React from "react";

import { Container, Content, SubTitle, Title } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  data: MovimentProps;
}

export interface MovimentProps {
  id: string;
  description: string;
  dueDate: string;
  value: number;
  code: string;
}

const List: React.FC<Props> = ({ data }) => {
  let textFormat = data?.description.substring(0, 20);
  if (data?.description.length > 20) {
    textFormat = textFormat.slice(0, -3) + "...";
  }

  return (
    <Container>
      <Content>
        <Title>{data?.description}</Title>
        <SubTitle> Vence em {data?.dueDate}</SubTitle>
      </Content>
      <Title>{formatCurrency(data?.value)}</Title>
    </Container>
  );
};

export { List };
