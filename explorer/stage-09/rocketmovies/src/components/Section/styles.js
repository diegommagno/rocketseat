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
  
  > button {
    width: 200px;
    margin-top: 0px;
  }
`;