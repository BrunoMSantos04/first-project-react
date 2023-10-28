import React, {useState, useRef} from "react";
import axios from 'axios'

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
  const inputName = useRef()
  const inputAge = useRef()


async function addNewUser() {
  const data = await axios.post("http://localhost:3001/users", {name: inputName.current.value, age: inputAge.current.value});
  console.log(data)
  
  // setUsers([...users,{id: Math.random(), 
  //   name: inputName.current.value, 
  //   age: inputAge.current.value}])

}

function deleteUser (userId) {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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

        <ul>
          {users.map((user) => (
            <User key={user.id}>

             <p> {user.name}</p><p>{user.age}</p>

             <button onClick={() => deleteUser(user.id)} > 
              <img alt="trashbin" src={trash} /> 
            </button>

            </User>
          ))}
        </ul>
      </Itens>
  </Container>
  );
}

export default App