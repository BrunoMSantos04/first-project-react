import React from "react";
import Consulting from './assets/Consulting.png'
import arrow from './assets/arrowRight.svg'

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
      <Img alt="logo-imagem" src={Consulting} />
      <Itens>
        <H1>Olá</H1>

        <LabelInput>Nome</LabelInput>
        <Input placeholder="Nome" />

        <LabelInput>Idade</LabelInput>
        <Input placeholder="Idade" />

        <Button> Cadastrar <img alt="seta" src={arrow}/> </Button>
      </Itens>
  </Container>
  );
}

export default App