import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <ButtonText title="Excluir nota" />

      <Section title="Marcadores">
        <Tag title="express" />
      </Section>
    </Container>
  );
}