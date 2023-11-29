import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

export function ButtonBack({ ...rest}) {
  return (
    <Container
      type="button"
      {...rest}
    >
      <FiArrowLeft />
      Voltar
    </Container>
  );
}