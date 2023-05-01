import PropTypes from 'prop-types';
import { Container, Header } from './styles';

import { Button } from '../Button';

export function Section({ title, children }) {
    return (
        <Container>
            <Header>
                <h2>{title}</h2>
                <Button title="Adicionar filme"></Button>
            </Header>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}