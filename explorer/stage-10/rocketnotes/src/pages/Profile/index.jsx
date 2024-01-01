import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceHolder from '../../assets/images/avatar-placeholder.svg';

import { Input } from './../../components/Input';
import { Button } from './../../components/Button';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  const [avatar, setAvatar] = useState(avatarUrl); // If the user already has an avatar, it will be added here. State that shows the avatar.
  const [avatarFile, setAvatarFile] = useState(null); // Used to load the new avatar image uploaded by the user. State that updates the avatar.
  
  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    await updateProfile({ user, avatarFile });
  }

  function handleAvatarUpdate(event) {
    const file = event.target.files[0]; // Get the avatar file.
    
    setAvatarFile(file); // Set the avatar file to the state.

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Foto do usuário" 
          />
          
          <label htmlFor="Avatar">
            <FiCamera />

            <input 
              id="Avatar" 
              type="file" 
              onChange={handleAvatarUpdate}
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}