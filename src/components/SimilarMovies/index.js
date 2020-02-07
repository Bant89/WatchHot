import React from 'react'
import { Container, Item, Image } from './styles'
import Slider from 'react-slick'
import placeholder from '../../assets/placeholder.jpg'

export const SimilarMovies = props => {
  let settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    touchMove: true,
    mobileFirst: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  if (props.data.length > 0) {
    return (
      <Container>
        <Slider {...settings}>
          {props.data.map(e => (
            <Item key={e.id}>
              <Image
                src={
                  e.poster_path
                    ? `https://image.tmdb.org/t/p/w300${e.poster_path}`
                    : placeholder
                }
                alt="hey"
              />
              <p style={{ color: '#333', fontWeight: 'bolder' }}>{e.title}</p>
            </Item>
          ))}
        </Slider>
      </Container>
    )
  } else {
    return <p>Loading...</p>
  }
}
