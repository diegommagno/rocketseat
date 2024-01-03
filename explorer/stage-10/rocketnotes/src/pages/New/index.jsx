import { useState } from 'react';

import { Container, Form } from './styles';

import { Link } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

export function New() {
  const [links, setLinks] = useState([]); // This state stores all links added by the user.
  const [newLink, setNewLink] = useState(''); // This state stores the new link added by the user.

  const [tags, setTags] = useState([]); // This state stores all tags added by the user.
  const [newTag, setNewTag] = useState(''); // This state stores the new tag added by the user.

  function handleAddLink() {
    // Acessar o conteudo anterior. Usa o spread operator (...) para copiar o conteudo anterior e adicionar o novo link.
    setLinks(prevState => [...prevState, newLink]); // Precisa ser feito assim para poder pegar os links antigos e add o novo link.
    setNewLink(''); // Limpa o state de novo link.
  }

  function handleRemoveLink(tagDeleted) {
    setLinks(prevState => prevState.filter(link => link !== tagDeleted)); // Pegar todos os links que são diferentes do link que foi deletado.
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]); // Pega tudo o que tinha antes e adiciona a nova tag.
    setNewTag(''); // Limpa o state de novo link.
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
                // Todo component de uma lista precisa de uma key e o map retorna um index, então é só usar o index como key.
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)} // escreve assim porque tem parametro.
                />
              ))
            }

            <NoteItem 
              isNew 
              placeholder="Novo link" 
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => { }}
                  />
                ))
              }

              <NoteItem 
                isNew 
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}