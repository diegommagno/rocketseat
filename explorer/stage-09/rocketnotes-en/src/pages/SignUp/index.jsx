import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
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
        />
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
        
        <Button title="Sign Up" />

        <Link to="/">
          Back to Login
        </Link>
      </Form>

    </Container>
  );
}