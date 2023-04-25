import { Container, Profile } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/diegommagno.png" alt="Foto do usuário" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Diego M. Magno</strong>
                </div>
            </Profile>
        </Container>
    )
  }