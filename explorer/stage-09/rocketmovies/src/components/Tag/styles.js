import styled from 'styled-components';

export const Container = styled.span`
  width: fit-content;
  height: fit-content;

  font-size: 12px;
  line-height: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  color: #E5E5E5;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;