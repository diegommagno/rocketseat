import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {
  return (
    <Container>

    <Header />

    <Content>
        <Section>
          <div className="wrapper">
            <h2>
              Meus Filmes
            </h2>
            <button>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 8.3754C0 8.00721 0.298477 7.70873 0.666667 7.70873H15.3333C15.7015 7.70873 16 8.00721 16 8.3754C16 8.74359 15.7015 9.04206 15.3333 9.04206H0.666667C0.298477 9.04206 0 8.74359 0 8.3754Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0.375397C8.36819 0.375397 8.66667 0.673874 8.66667 1.04206V15.7087C8.66667 16.0769 8.36819 16.3754 8 16.3754C7.63181 16.3754 7.33333 16.0769 7.33333 15.7087V1.04206C7.33333 0.673874 7.63181 0.375397 8 0.375397Z" fill="black"/>
              </svg>

              Adicionar Filme
            </button>
          </div>


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