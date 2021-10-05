import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './style'
import PropTypes from 'prop-types'

export const FavButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size={24} /> {likes} likes!
    </Button>
  )
}

FavButton.PropTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number,
  onClick: PropTypes.func
}
