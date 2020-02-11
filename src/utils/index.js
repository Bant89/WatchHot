import React from 'react'

export const getStars = value => {
  let amountFilled = Math.floor((value / 10) * 5)
  let res = []
  for (let i = 0; i < amountFilled; i++)
    res.push(<ion-icon name="star" key={i} style={{zIndex: '10'}}></ion-icon>)

  if (value / amountFilled !== 0)
    res.push(<ion-icon name="star-half" key={res.length} style={{zIndex: '10'}}></ion-icon>)

  while (res.length < 5) res.push(<ion-icon name="star-outline" key={res.length} style={{zIndex: '10'}}></ion-icon>)

  return res
}

