import { Container } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <Section title="Marcadores">
        <Tag title="express" />
      </Section>
    </Container>
  );
}