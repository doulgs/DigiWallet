import React from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, AreaImput, AreaButton } from "./styles";

const Auth = () => {
  return (
    <Container>
      <AreaImput>
        <Input placeholder="Email" />
        <Input placeholder="Senha" secureTextEntry />
      </AreaImput>
      <AreaButton>
        <Button title="Acessar" />
      </AreaButton>
    </Container>
  );
};

export { Auth };
