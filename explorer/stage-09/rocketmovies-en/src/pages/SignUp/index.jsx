import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to track everything you watch.</p>

        <h2>Create your account</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Sign Up" />

          <Link to="/">
            <FiArrowLeft />
            Back to Login
          </Link>
      </Form>

      <Background />
    </Container>
  );
}