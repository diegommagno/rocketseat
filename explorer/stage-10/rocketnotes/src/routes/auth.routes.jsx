import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  const user = localStorage.getItem("@rocketnotes:user");

 return (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />

    { !user && <Route path="*" element={<Navigate to="/" />} /> } 
    {/* Somente execute isso se o usuário for nulo, portanto, não estiver logado. Assim o user pode colocar a nota nos favoritos e voltar nela, caso logado. */}
  </Routes>
 ) 
}