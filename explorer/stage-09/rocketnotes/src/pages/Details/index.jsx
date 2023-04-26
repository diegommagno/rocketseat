import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button'; 
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tags';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
   return (
      <Container>
         <Header />

         <main>
            <Content>
               <ButtonText title="Excluir nota" />

               <h1>Introdução ao React</h1>

               <p>
                  O React é uma biblioteca JavaScript de código aberto amplamente utilizada para criar interfaces de usuário em aplicativos web e móveis. Foi criado pelo Facebook em 2011 e tornou-se rapidamente popular entre os desenvolvedores devido à sua facilidade de uso, desempenho e capacidade de criar componentes reutilizáveis. O React permite que os desenvolvedores criem aplicativos com uma interface de usuário dinâmica e responsiva que pode ser atualizada sem a necessidade de recarregar a página, proporcionando aos usuários uma experiência mais rápida e interativa. Além disso, o React possui uma grande comunidade de desenvolvedores que contribuem com bibliotecas, ferramentas e recursos, tornando-o uma das escolhas mais populares para o desenvolvimento de aplicativos modernos.
               </p>

               <Section title="Links Úteis">
                  <Links>
                     <li><a href="#">https://www.rocketseat.com.br</a></li>
                     <li><a href="#">https://www.rocketseat.com.br</a></li>
                  </Links>
               </Section>

               <Section title="Marcadores">
                  <Tag title="express" />
                  <Tag title="node.js" />
               </Section>

               <Button title="Voltar"/>

            </Content>
         </main>
      </Container>
   )
}