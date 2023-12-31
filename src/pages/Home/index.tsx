import React from "react";

import { Container, Content, SpaceFooterList } from "./styles";
import { Header } from "../../components/Header";
import { TopBar } from "../../components/TopBar";
import { FlatList, View } from "react-native";
import { List } from "../../components/List";

const data = [
  {
    id: "1",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120000,
    code: "123456",
  },
  {
    id: "2",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "3",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "4",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "5",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "6",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "7",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "8",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "9",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
  {
    id: "10",
    description: "Nome do Documento",
    dueDate: "10/12/1999",
    value: 120,
    code: "123456",
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <TopBar bedge={data.length} />
      <Content>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <List data={item} />}
        />
      </Content>
    </Container>
  );
};

export { Home };
