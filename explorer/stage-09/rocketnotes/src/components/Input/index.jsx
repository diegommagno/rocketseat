import PropTypes from 'prop-types';
import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  /* {Icon && <Icon />} Isso significa que ele só vai mostrar o ícone se o ícone existir 
     O && significa isso.
  */
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
};