import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  
  background-color: ${({ theme }) => theme.COLORS.BG_RED};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 24px;

  > h1 {
    flex: 1; /* Para ele ocupar o máximo de espaço disponível para ele */
    text-align: left;

    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    
    display: flex;
    margin-top: 24px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 6px;

    margin-top: 8px;
  }

  p {
    max-height: 57px;
    overflow: hidden;
    text-align: justify;

    color: ${({ theme }) => theme.COLORS.WHITE};

    padding-right: 20px;

    margin-top: 15px;

    font-family: 'Roboto', sans-serif;
    line-height: 19px;

  }
  
`;