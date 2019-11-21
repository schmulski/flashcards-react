import React, { useState, useEffect } from 'react'
import Card from './Card'
import CardContainer from './CardContainer'
import GlobalStyles from './GlobalStyles'
import FilterButton from './FilterButton'
import { getCards, postCard, deleteCard, patchCard } from './services'

export default function App() {
  // let savedData = Variable nicht nötig
  const [cards, setCards] = useState(
    JSON.parse(localStorage.savedCards || null) || []
  )

  // useEffect(() => {
  //   console.log('cards have changed')
  // }, [cards]) wenn sich in cards etwas ändert

  // useEffect(() => {
  // console.log('cards have changed')
  // }, []) //wird nur einmal ausgfeührt, beim erstellen der Komponente

  // useEffect(() => {
  //   console.log('cards have changed')
  // }, wir ausgeführt, wenn sich irgendetwas ändert

  useEffect(() => {
    getCards()
      .then(setCards)
      .catch(err => {
        console.log(err)
      })
  }, [])

  const [isOnlyBookmarksShown, setOnlyBookmarksShown] = useState(false)

  return (
    <div>
      <GlobalStyles />
      <FilterButton
        active={isOnlyBookmarksShown}
        onClick={() => setOnlyBookmarksShown(!isOnlyBookmarksShown)}
      >
        {isOnlyBookmarksShown ? 'All Cards' : 'Bookmarked cards'}
      </FilterButton>
      <CardContainer>
        {isOnlyBookmarksShown
          ? cards
              .filter(card => card.isBookmarked)
              .map(card => (
                <Card
                  key={card._id}
                  {...card}
                  toggleBookmarked={() => toggleBookmarked(card._id)}
                />
              ))
          : cards.map(card => (
              <Card
                key={card._id}
                {...card}
                toggleBookmarked={() => toggleBookmarked(card._id)}

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
  function toggleBookmarked(id) {
    const index = cards.findIndex(card => card._id === id)
    const card = cards[index]
    patchCard({ id: card._id, isBookmarked: !card.isBookmarked }).then(
      changedCard => {
        setCards([
          ...cards.slice(0, index),
          changedCard,
          ...cards.slice(index + 1),
        ])
      }
    )
  }

  function savedCards() {
    localStorage.setItem('savedCards', JSON.stringify(cards))
  }

  //function loadCards() {
  //const cardsJSON = localStorage.getItem('savedCards')
  //return JSON.toUpperCase(cardsJSON)
  //}
}
