import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceHolder from '../../assets/images/avatar-placeholder.svg';

import { Container, Profile, Logout } from './styles';

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    return (
        <Container>
            <Profile to="/profile">
                <img 
                    src={avatarUrl}
                    alt="Foto do usuário" 
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Diego M. Magno</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
  }