import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;


  > h1 {
    font-size:  48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GREY_100};
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
  }
`;