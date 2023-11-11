import React, {useState, useRef} from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Consulting from '../../assets/Consulting.png'
import arrow from '../../assets/arrowRight.svg'

import H1 from '../../components/Title'
import Itens from '../../components/containerItens'
import Button from '../../components/Button'

import {
  Container,
  Img,
  LabelInput,
  Input,
} from './styles';

//JSX
function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const navigate = useNavigate()

  async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3001/users", 
        {
          name: inputName.current.value, 
          age: inputAge.current.value
        });

        console.log(newUser)
    setUsers([...users, newUser]) 

   navigate("/usuarios") 
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

          <Button to="/usuarios" onClick={addNewUser} > 
            Cadastrar <img alt="Arrow" src={arrow}/>         
          </Button>
          
        </Itens>
    </Container>
    );
}

export default App