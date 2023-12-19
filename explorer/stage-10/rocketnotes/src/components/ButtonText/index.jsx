import PropTypes from 'prop-types'; 
import { Container } from './styles';

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container 
    type="button"
    isActive={isActive}
      {...rest}
    >
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
};