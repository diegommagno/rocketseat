import PropTypes from 'prop-types';
import { FiPlus } from 'react-icons/fi';

import { Container, Header, Button } from './styles';

export function Section({ title, children }) {
    return (
        <Container>
            <Header>
                <h2>{title}</h2>
                <Button>
                    <FiPlus />
                    Adicionar filme
                </Button>
            </Header>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}