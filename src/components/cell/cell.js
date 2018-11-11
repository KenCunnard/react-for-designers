import React from 'react';
import styled from 'styled-components';

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`;

const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background-size: 60px;
  background-color: #000;
  background-image: url(${props => props.image});
  border-radius: 10px;
`;

const CellTitle = styled.div`
  padding: 30px 0;
  font-size: 24px;
  border-bottom: 1px solid rgba(0,0,0, 0.1);
`;

const Cell = props => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellTitle>{props.title}</CellTitle>
  </CellGroup>
);

export default Cell;