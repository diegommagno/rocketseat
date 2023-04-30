import PropsTypes from 'prop-types';
import { Container } from './styles';

export function Tag({ title }) {
  return (
    <Container>
      {title}
    </Container>
  );
}

Tag.propTypes = {
  title: PropsTypes.string.isRequired,
};