import React from "react";
import {
  Container,
  H1,
  Img,
  Itens,
  LabelInput,
  Input,
  Button
} from './styles';

//JSX
function App() {

return (
  <Container>
      <Img />
      <Itens>
        <H1>Olá</H1>

        <LabelInput>Nome</LabelInput>
        <input placeholder="Nome" />

        <LabelInput>Idade</LabelInput>
        <Input placeholder="Idade" />

        <Button>
            Cadastrar 
        </Button>
      </Itens>
  </Container>
  );
}

export default App