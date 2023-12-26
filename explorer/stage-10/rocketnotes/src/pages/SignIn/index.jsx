import { useState, useEffect, useCallback } from 'react'; // Imported to create states and store information the user will type in email and password.
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  
    // Memoized handleSignIn using useCallback
    const handleSignIn = useCallback(() => {
      signIn({ email, password });
    }, [signIn, email, password]);
  
    // Function to handle keydown event
    const handleKeyDown = useCallback((event) => {
      if (event.key === 'Enter') {
        handleSignIn();
      }
    }, [handleSignIn]);
  
    useEffect(() => {
      // Adding event listener when the component mounts
      document.addEventListener('keydown', handleKeyDown);
  
      // Cleaning up the event listener when the component unmounts
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleSignIn, handleKeyDown]);


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
            onChange={e => setEmail(e.target.value.toLowerCase())}
        />
        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        
        <Button title="Enter" onClick={handleSignIn}/>

        <Link to="/register">
          Create account
        </Link>
      </Form>

      <Background />
    </Container>
  );
}