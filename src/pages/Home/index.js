import React, {useState, useRef} from "react";
import axios from 'axios'

import Consulting from '../../assets/Consulting.png'
import arrow from '../../assets/arrowRight.svg'

import {
  Container,
  H1,
  Img,
  Itens,
  LabelInput,
  Input,
  Button,
} from './styles';

//JSX
function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3001/users", 
        {
          name: inputName.current.value, 
          age: inputAge.current.value
        });

        console.log(newUser)
    setUsers([...users, newUser]) 
}


  return (
    <Container>
        <Img alt="logo-img" src={Consulting} />
        <Itens>
          <H1>Olá</H1>

          <LabelInput>Nome</LabelInput>
          <Input ref={inputName} placeholder="Nome" />

          <LabelInput>Idade</LabelInput>
          <Input ref={inputAge} placeholder="Idade" />

          <Button onClick={addNewUser} > 
            Cadastrar <img alt="Arrow" src={arrow}/>         
          </Button>

        </Itens>
    </Container>
    );
}

export default App