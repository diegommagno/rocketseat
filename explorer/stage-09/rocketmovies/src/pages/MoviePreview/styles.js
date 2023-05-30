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

  .movie-header {
    display: flex;
    gap: 19px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
`;