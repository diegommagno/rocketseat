import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {

  const data = useAuth();
  console.log("Meu contexto: ", data)

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links.</p>

        <h2>Log In</h2>

        <Input 
          placeholder="Email"
          type="email"
          icon={FiMail}
        />
        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
        />
        
        <Button title="Enter" />

        <Link to="/register">
          Create account
        </Link>
      </Form>

      <Background />
    </Container>
  );
}