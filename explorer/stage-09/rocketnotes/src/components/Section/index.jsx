import PropTypes from 'prop-types';
import { Container } from './styles';

/* O children é que posso pegar um filho e colocar como uma propriedade 
   Nesse caso, temos dois.
    Um title é Links Úteis e o children são os links que ficam em baixo
    Outro title vai ser Marcadores e o children são tags
*/

export function Section({ title, children }) {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}