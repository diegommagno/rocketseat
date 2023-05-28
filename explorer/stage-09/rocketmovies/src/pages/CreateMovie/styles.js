import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  main {
    margin-top: 40px;
    padding: 0 123px;

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