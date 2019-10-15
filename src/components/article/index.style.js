import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px auto;
  border: 1px solid gray;
  border-radius: 10px;
  width: 60vw;
  font-family: 'Grenze', serif;
  animation: ${fadein} 2s;
`;

export const ContentHeader = styled.h2`
  text-transform: uppercase;
  margin-bottom: 16px;
  padding: 0;
  align-self: center;
  font-size: 42px;
`;

export const ContentAuthor = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  align-self: flex-end;
`;

export const ContentText = styled.div`
  margin-bottom: 16px;
  font-size: 24px;
`;

export const ContentClose = styled.div`
  align-self: flex-end;
  cursor: pointer;
  transform: scale(2);
  margin-top: 12px;
  margin-right: 12px;
`;

export const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;
export const CommentName = styled.div`
  font-size: 12px;
`;
export const CommentBody = styled.div`
  font-size: 16px;
`;
