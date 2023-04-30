import PropsTypes from 'prop-types';
import { Container } from './styles';

export function Section({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Section.propTypes = {
  children: PropsTypes.node.isRequired,
};