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

    margin: 40px 123px;

    /* Scrollbar code */
    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.COLORS.PINK_HOVER};
    }
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

  .added-info {
    display: flex;
    align-items: center;
    gap: 10px;
    
    .user, .timestamp {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 16px;
        height: 16px;
        border: 1px solid #3E3B47;
        border-radius: 50%;
      }
    }
  }

  .wrapper {
    padding-top: 16px;
    margin-bottom: 40px;
  }
  
  p {
    text-align: justify;
    padding-right: 20px;
  }
`;