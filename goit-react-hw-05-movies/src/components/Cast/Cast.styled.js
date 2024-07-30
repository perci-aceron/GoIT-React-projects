import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

export const CastItem = styled.li`
  width: calc(20% - 16px);
  margin-bottom: 16px;
  padding: 2px 8px;
`;
export const Name = styled.h3`
  margin: 8px 0;
`;
export const Character = styled.p`
  margin: 0;
`;
