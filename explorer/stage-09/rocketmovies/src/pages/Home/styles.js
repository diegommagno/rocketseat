import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header" 
  "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;

export const Content = styled.div`
  grid-area: content;
  
  padding: 47px 123px;

  overflow-y: auto; /* Caso haja muitas notas, vai aparecer uma barrinha para poder rolar somente as notas */
  
  /* Scrollbar code */
  /* width */
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    border: 6px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;