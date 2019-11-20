import React, { useState } from 'react'
import Card from './Card'
import CardsData from './cards.json'
import CardContainer from './CardContainer'
import GlobalStyles from './GlobalStyles'
import FilterButton from './FilterButton'

export default function App() {
  let savedData = JSON.parse(localStorage.savedCards || null) || {}
  const [cards, setCards] = useState(CardsData || savedData)
  const [isOnlyBookmarksShown, setOnlyBookmarksShown] = useState(false)

  return (
    <div>
      <GlobalStyles />
      <FilterButton
        onClick={() => setOnlyBookmarksShown(!isOnlyBookmarksShown)}
      >
        {isOnlyBookmarksShown ? 'All Cards' : 'Bookmarked cards'}
      </FilterButton>
      <CardContainer>
        {isOnlyBookmarksShown
          ? cards
              .filter(card => card.isBookmarked)
              .map((card, index) => (
                <Card
                  key={index}
                  {...card}
                  toggleBookmarked={() => toggleBookmarked(index)}
                />
              ))
          : cards.map((card, index) => (
              <Card
                key={index}
                {...card}
                toggleBookmarked={() => toggleBookmarked(index)}

                // title={card.title}
                // question={card.question}
                // answer={card.answer}
                // tags={card.tags}
                // isbookmarked={card.bookmarked}
              />
            ))}
        {savedCards()}
      </CardContainer>
    </div>
  )
  function toggleBookmarked(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }

  function savedCards() {
    localStorage.setItem('savedCards', JSON.stringify(cards))
  }

  //function loadCards() {
  //const cardsJSON = localStorage.getItem('savedCards')
  //return JSON.toUpperCase(cardsJSON)
  //}
}
