
import PropsTypes from 'prop-types';
import { Container } from './styles';

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
};