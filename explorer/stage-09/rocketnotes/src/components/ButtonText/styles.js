import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.ORANGE };

  border: 1px solid red;
  font-size: 16px;
  
  cursor: pointer;
`;