import React, {useState} from "react";
import Consulting from './assets/Consulting.png'
import arrow from './assets/arrowRight.svg'
import trash from './assets/bin.png'

import {
  Container,
  H1,
  Img,
  Itens,
  LabelInput,
  Input,
  Button,
  User
} from './styles';

//JSX
function App() {
  const [users, setUsers] = useState([])

function addNewUser() {
  setUsers([{id: Math.random(), name:"Bruno", age: 19}])
}

return (
  <Container>
      <Img alt="logo-imagem" src={Consulting} />
      <Itens>
        <H1>Olá</H1>

        <LabelInput>Nome</LabelInput>
        <Input placeholder="Nome" />

        <LabelInput>Idade</LabelInput>
        <Input placeholder="Idade" />

        <Button onClick={addNewUser} > 
          Cadastrar <img alt="Arrow" src={arrow}/>         
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
             <p> {user.name}</p><p>{user.age}</p>
             <button> <img alt="trashbin" src={trash} /> </button>
            </User>
          ))}
        </ul>
      </Itens>
  </Container>
  );
}

export default App