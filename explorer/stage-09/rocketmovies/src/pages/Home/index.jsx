import { FiPlus } from 'react-icons/fi';

import { Container, Wrapper, Content, NewMovieNote } from './styles'

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {
  return (
    <Container>

    <Header />

    <Wrapper>
      <h2>
        Meus Filmes
      </h2>

      <NewMovieNote to="/create-movie">
        <FiPlus />
        Adicionar Filme
      </NewMovieNote>
    </Wrapper>

    <Content>
        <Section>
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família'}
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
          <Note data={{ 
            title: 'Interestellar', 
            tags: [
              { id: '1', name: 'Interestellar' },
              { id: '2', name: 'rocketseat' }
            ]
          }} 
          />
        </Section>
      </Content>
  </Container>
  );
}