import { useState } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Fill in all fields!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
        // I want to know if when this error happens, there is a response for it and a personalised message, as there is, it will be shown here.
      } else {
        alert("Oops! Something went wrong, and we couldn't complete the Sign Up process.");
      }
    })
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links.</p>

        <h2>Create your account</h2>

        <Input 
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="Email"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassowrd(e.target.value)}
        />
        
        <Button title="Sign Up" onClick={handleSignUp}/>

        <Link to="/">
          Back to Login
        </Link>
      </Form>

    </Container>
  );
}