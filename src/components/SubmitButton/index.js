import React from 'react'
import { Button } from './style'

export const SubmitButton = ({ disabled, children, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick} type='submit'>
      {children}
    </Button>
  )
}
