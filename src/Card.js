import React, { useState } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'

export default function Card({
  question,
  answer,
  isBookmarked,
  toggleBookmarked,
}) {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <CardStyled>
      <h2>{question}</h2>
      <p>{showAnswer ? answer : ''}</p>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide answer' : 'Show answer'}
      </button>
      <Bookmark active={isBookmarked} onClick={toggleBookmarked} />
    </CardStyled>
  )
}

const CardStyled = styled.div`
  position: relative;
  padding: 20px;
  background: coral;
  color: #333;
  border-radius: 6px;
  box-shadow: 0 10px 10px #0002;
`

//Card.propTypes = {
//question: PropTypes.string.isRequired,
//answer: PropTypes.string.isRequired,
//}
//({props}) müssen dann oben in der Card übergeben werden
