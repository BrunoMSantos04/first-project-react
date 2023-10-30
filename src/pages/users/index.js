import React, {useState, useEffect} from "react";
import axios from 'axios'

import Avatar from '../../assets/UserProfile.png'
import arrow from '../../assets/arrowRight.svg'
import trash from '../../assets/bin.png'

import {
  Container,
  H1,
  Img,
  Itens,
  Button,
  User
} from './styles';

//JSX
function Users() {
  const [users, setUsers] = useState([])



  useEffect(() => {
      async function fetchUsers(){
        const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
      }
      fetchUsers()
  }, [])

  async function deleteUser (userId) {
      await axios.delete(`http://localhost:3001/users/${userId}`)
      const newUsers = users.filter(user => user.id !== userId)
      setUsers(newUsers)
  }

  return (
    <Container>
        <Img alt="logo-img" src={Avatar} />
        <Itens>
          <H1>Usuários</H1>
          
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

          <Button  > 
            <img alt="Arrow" src={arrow}/>  Voltar        
          </Button>

        </Itens>
    </Container>
    );
}

export default Users