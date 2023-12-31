import React from "react";
import {
  Container,
  Content,
  ContentIMG,
  ContentText,
  ImageProfile,
  SubTitle,
  Title,
} from "./styles";

const image = require("../../assets/BackgroundHeader.png");

interface HeaderProsp {}

const Header: React.FC<HeaderProsp> = () => {
  return (
    <Container>
      <ContentIMG source={image} resizeMode="cover">
        <Content>
          <ContentText>
            <Title>Olá, Tiago</Title>
            <SubTitle>Organize suas contas e suas tarefas</SubTitle>
          </ContentText>
          <ImageProfile
            source={require("../../assets/hello.png")}
            resizeMode="contain"
          />
        </Content>
      </ContentIMG>
    </Container>
  );
};

export { Header };
