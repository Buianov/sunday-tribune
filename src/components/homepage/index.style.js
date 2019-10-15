import styled, { keyframes } from 'styled-components';

export const NewsContainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
`;

export const NewsBlock = styled.div`
  display: grid;
  grid-template-areas:
    'title image'
    'author image';
  gap: 10px;
  grid-template-columns: 1fr 150px;
  grid-template-rows: 1fr 20px;

  &:hover {
    cursor: pointer;
  }

  &:hover h2 {
    text-decoration: underline;
  }
`;

export const NewsTitle = styled.h2`
  padding: 0;
  margin: 0;
  grid-area: title;
`;

export const NewsAuthor = styled.div`
  grid-area: author;
  justify-self: end;
`;

export const NewsImage = styled.div`
  grid-area: image;
  width: 150px;
  height: 150px;
  padding: 2px;
  outline: 1px solid #90a4ae;
`;

export const HeaderNewsBlock = styled.div`
  //
`;

export const ShowMoreBlock = styled.div`
  margin-top: 35px;
`;

export const SearchBlock = styled.div`
  margin-bottom: 35px;
  display: flex;
  justify-content: flex-end;
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 15px auto;
  border: 1px solid #90a4ae;
  border-radius: 10px;
  width: 60vw;
  font-family: 'Grenze', serif;

  animation: ${fadein} 2s;
`;
