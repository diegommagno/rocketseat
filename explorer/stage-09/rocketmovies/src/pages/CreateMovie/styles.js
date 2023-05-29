import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    margin-top: 40px;
    padding: 0 123px;
  }

  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    
    padding: 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 24px auto;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  
`;