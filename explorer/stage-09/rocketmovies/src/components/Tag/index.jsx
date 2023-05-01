import PropsTypes from 'prop-types';
import { Container } from './styles';

export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  );
}

Tag.propTypes = {
  title: PropsTypes.string.isRequired,
};