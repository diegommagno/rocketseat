import { Container } from './styles';

import { Button } from '../../components/Button';

export function Details() {
  return (
    <Container>
      <Button title="Cadastrar" loading/>
      <Button title="Login" />
    </Container>
  );
}