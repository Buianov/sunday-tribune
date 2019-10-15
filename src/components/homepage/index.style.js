import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  0% {
    transform: translateX(0);
  }
  
  100% {
    transform: translateX(-4px);
  }

`;

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
    animation: ${scale} 1s infinite alternate linear;
  }
`;

export const NewsTitle = styled.h2`
  //margin-bottom: 5px;
  padding: 0;
  margin: 0;
  grid-area: title;
  //align-self: start;
  //justify-self: center;
`;

export const NewsAuthor = styled.div`
  grid-area: author;
  //align-self: start;
  justify-self: end;
`;

export const NewsImage = styled.div`
  grid-area: image;
  width: 150px;
  height: 150px;
  padding: 2px;
  border: 1px solid #000;
`;

export const HeaderNewsBlock = styled.div`
  //
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 15px auto;
  border: 1px solid gray;
  border-radius: 10px;
  width: 60vw;
  font-family: 'Grenze', serif;
`;
