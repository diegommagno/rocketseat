import { FiSearch } from 'react-icons/fi';

import { Container, Logo, Search, Profile } from './styles';

import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>

      <Logo>
        RocketMovies
      </Logo>
      
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Profile to="/profile">
        <img src="https://github.com/diegommagno.png" alt="Foto do Usuário" />

        <div>
          <strong>Diego Magno</strong>
          <span>Sair</span>
        </div>
      </Profile>
    </Container>
  );
}