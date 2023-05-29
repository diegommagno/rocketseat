import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonBack } from '../../components/ButtonBack';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
      <a href="/">
        <ButtonBack />
      </a>

        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador"/>
            </div>
          </Section>

          <div>
            <Button className="button black" title="Excluir filme"/>
            <Button className="button" title="Salvar Alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  );
}