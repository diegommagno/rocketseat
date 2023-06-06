import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header" 
  "content";


  background-color: ${({ theme }) => theme.COLORS.BG_900};
`;

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`;

export const Content = styled.div`
  grid-area: content;
  margin: 47px 123px;
  padding-right: 8px;
  overflow-y: auto; /* Caso haja muitas notas, vai aparecer uma barrinha para poder rolar somente as notas */
  
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

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 38px;

    h2 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
    }

    button {
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
    }
  }
`;