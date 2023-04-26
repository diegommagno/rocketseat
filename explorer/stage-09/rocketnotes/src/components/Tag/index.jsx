import PropTypes from 'prop-types';
import { Container } from './styles';

export function Tag({ title }) {
  return (
    <Container>
      {title}
    </Container>
  );
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};