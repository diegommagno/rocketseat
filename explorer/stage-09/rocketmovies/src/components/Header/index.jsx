import { Container, Logo, Profile } from './styles';

export function Header() {
  return (
    <Container>

      <Logo>
        RocketMovies
      </Logo>
      
      <Profile>
        <img src="https://github.com/diegommagno.png" alt="Foto do Usuário" />

        <div>
          <strong>Diego Magno</strong>
          <span>Sair</span>
        </div>
      </Profile>
    </Container>
  );
}