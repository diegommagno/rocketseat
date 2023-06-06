import styled from 'styled-components';

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;

  width: fit-content;
  height: fit-content;

  font-size: 12px;
  color: #E5E5E5;
  line-height: 14px;
  
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;