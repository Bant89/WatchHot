import React from 'react'
import {
  Container,
  Title,
  Image,
  TextPlacement,
  DataContainer,
  ItemHeader,
  ItemValue,
  Button
} from './styles'
import placeholder from '../../assets/placeholder.jpg'
import { getStars } from '../../utils'
import { TagList } from '../TagList'

export const MovieInfo = props => {
  let { isLoading, error } = props

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (error) {
    return <h1>Oops! Something went wrong!</h1>
  }
  let {
    genres = [],
    vote_count,
    vote_average,
    budget,
    revenue,
    poster_path: image,
    overview,
    original_title: title,
    runtime,
    release_date: opening
  } = props.data
  let formatedRuntime = x => `${parseInt(x / 60)}h ${x % 60}m`

  return (
    <Container>
      <Image
        src={image ? `https://image.tmdb.org/t/p/w400${image}` : placeholder}
        alt="hey"
      />
      <Title>{title}</Title>
      <DataContainer>
        <div style={{ textAlign: 'center' }}>
          <ItemHeader>Vote count:</ItemHeader>
          <ItemValue>
            {' '}
            {vote_count !== undefined
              ? vote_count.toLocaleString('en-US')
              : vote_count}
          </ItemValue>

          <ItemHeader>Budget:</ItemHeader>
          <ItemValue>
            <span role="img" aria-label="money emoji">
              💵
            </span>
            {budget !== undefined ? budget.toLocaleString('en-US') : budget}
          </ItemValue>
          <ItemHeader>Release date:</ItemHeader>
          <ItemValue>{opening}</ItemValue>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ItemHeader> Vote average:</ItemHeader>
          <ItemValue>{getStars(vote_average)}</ItemValue>

          <ItemHeader>Revenue:</ItemHeader>
          <ItemValue>
            <span role="img" aria-label="money emoji">
              💵
            </span>
            {revenue !== undefined ? revenue.toLocaleString('en-US') : revenue}
          </ItemValue>
          <ItemHeader>Runtime:</ItemHeader>
          <ItemValue>{formatedRuntime(runtime)}</ItemValue>
        </div>
        <Button onClick={() => {props.setShow(true)}}>Watch Trailer</Button>
          {genres.length > 0
            ? <TagList genres={genres} />
            : null}
      </DataContainer>
      <TextPlacement>
        <ItemHeader>Overview:</ItemHeader>
        <ItemValue>{overview}</ItemValue>
      </TextPlacement>
    </Container>
  )
}
