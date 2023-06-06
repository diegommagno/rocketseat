import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header" 
  "Wrapper"
  "NewMovieNote"
  "content";


  background-color: ${({ theme }) => theme.COLORS.BG_900};
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;

export const Wrapper = styled.div`
  grid-area: Wrapper;
  margin: 47px 123px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 38px;

  h2 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
    }
`;

export const NewMovieNote = styled(Link)`
  grid-area: NewMovieNote;

  width: 207px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.PINK};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-weight: 500;
  
  border: 0;
  border-radius: 10px;

  padding: 0 16px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  margin: 0px 123px 57px;
  padding-right: 8px;
  overflow-y: auto; /* Caso haja muitas notas, vai aparecer uma barrinha para poder rolar somente as notas */
  
  div {
    margin-bottom: 0;
  }
  
  /* Scrollbar code */
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK_HOVER};
  }
`;