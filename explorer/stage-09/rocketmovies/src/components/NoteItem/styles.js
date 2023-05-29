import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GREY_400}` : "none"};

  border-radius: 10px;
  padding: 16px;

  > button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
  }

  .button-add, .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GREY_400};
    }
  }
`;