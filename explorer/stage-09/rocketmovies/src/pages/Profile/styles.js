import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BG_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};

      svg {
        font-size: 24px;
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
`;