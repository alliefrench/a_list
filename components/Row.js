import React from 'react';
import styled from 'styled-components';
import ROWTYPES from '../fixtures';

const Row = ({ rowType, content }) => {
  const headers = Object.keys(ROWTYPES[rowType]);

  return (
    <Wrapper>
      {headers.map((element) => (
        <Cell key={element}>{content[element]}</Cell>
      ))}
    </Wrapper>
  );
};

const Cell = styled.div`
  width: 8rem;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 4rem 0;
`;

export default Row;
