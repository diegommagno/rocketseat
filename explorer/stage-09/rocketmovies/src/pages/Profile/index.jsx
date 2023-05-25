import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
    </Container>
  );
}