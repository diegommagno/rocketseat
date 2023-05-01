import styled from 'styled-components';

export const Container = styled.section`
  margin: 28px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;

  > h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 200px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;