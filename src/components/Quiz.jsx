import React, { useState } from 'react';
import styled from 'styled-components';

import Choice from './Choice';

export default ({ choices, next, status }) => {
  const [visible, setVisible] = useState(status);

  const QuizDiv = styled.div`
    margin: 0 auto;
    text-align: center;
  `;

  const StyledChoice = styled(Choice)`
    float: left;
    width: 30%;
  `;

  const Answer = styled.div`
    margin: 0 auto;
    padding: 5px;
    width: 300px;
    height: 150px;
    margin-top: 10px;

    line-height: 150px;
  `;

  const Correct = styled(Answer)`
    background: #d4edda;
    color: #155724;
    cursor: pointer;
  `;

  const Wrong = styled(Answer)`
    background: #f8d7da;
    color: #721c24;
  `;

  const FlexContainer = styled.div`
    clear: both;
    display: flex;
    align-items: center;
  `;

  const correctChoice = () => choices.filter(c => c.isCorrect === true).first();

  const setStatus = status => setVisible(status);

  return (
    <QuizDiv>
      <div>
        <h1>Arvaa, mikä näistä on {correctChoice().name}?</h1>

        {choices.map((choice, i) => {
          return <StyledChoice key={i} choice={choice} onClick={setStatus} />;
        })}
      </div>

      {visible !== null && (
        <FlexContainer>
          {visible && (
            <Correct
              onClick={() => {
                setStatus(null);
                next();
              }}
            >
              Oikein!
            </Correct>
          )}
          {!visible && <Wrong>Yritä uudestaan...</Wrong>}
        </FlexContainer>
      )}
    </QuizDiv>
  );
};
