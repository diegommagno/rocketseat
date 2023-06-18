import PropTypes from 'prop-types';

import { Container, Header } from './styles';

export function Section({ title, children }) {
    return (
        <Container>
            <Header>
                <h2>{title}</h2>
            </Header>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}