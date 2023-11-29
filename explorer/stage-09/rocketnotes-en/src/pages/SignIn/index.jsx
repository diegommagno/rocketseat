import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
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