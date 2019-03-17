import React, { useState } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 90%;

  &:hover {
    cursor: pointer;
  }
`;

export default ({ className, choice, onClick }) => {
  return (
    <div className={className}>
      <Img src={choice.image} onClick={() => onClick(choice.isCorrect)} />
    </div>
  );
};
