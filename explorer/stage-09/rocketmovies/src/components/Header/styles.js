import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 0 123px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.div`
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 9px;
    line-height: 24px;

    min-width: 10rem;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      cursor: pointer;
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

`;