import PropsTypes from 'prop-types';
import { Container } from './styles';

export function ButtonText({ title, ...rest}) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: PropsTypes.string.isRequired,
};