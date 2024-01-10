import { useState } from 'react';

import { Container, Form } from './styles';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function New() {
  const [title, setTitle] = useState(""); // This state stores the title of the note.
  const [description, setDescription] = useState(""); // This state stores the description of the note.

  const [links, setLinks] = useState([]); // This state stores all links added by the user.
  const [newLink, setNewLink] = useState(''); // This state stores the new link added by the user.

  const [tags, setTags] = useState([]); // This state stores all tags added by the user.
  const [newTag, setNewTag] = useState(''); // This state stores the new tag added by the user.

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    // Acessar o conteudo anterior. Usa o spread operator (...) para copiar o conteudo anterior e adicionar o novo link.
    setLinks(prevState => [...prevState, newLink]); // Precisa ser feito assim para poder pegar os links antigos e add o novo link.
    setNewLink(''); // Limpa o state de novo link.
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted)); // Pegar todos os links que são diferentes do link que foi deletado.
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]); // Pega tudo o que tinha antes e adiciona a nova tag.
    setNewTag(''); // Limpa o state de novo link.
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title) {
      return alert("You left the title of the note blank. Please, add a title to continue.");
    }

    if(newLink) {
      return alert("You left a link without adding it. Please, add it or remove it to continue.");
    }

    if(newTag) {
      return alert("You left a tag without adding it. Please, add it or remove it to continue.");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("New note created!");
    navigate(-1); // Using useNavigate from react, redirect the user to the home screen after creating a note.
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText 
              title="Voltar"
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Título" 
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

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
                    onClick={() => handleRemoveTag(tag)}
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

          <Button 
            title="Salvar" 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}