import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  return (
    <ul style={{ padding: 0 }}>
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <PhotoCard id={photo.id} {...photo} />
          </li>
        )
      })}
    </ul>
  )
}
