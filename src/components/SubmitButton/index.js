import React from 'react'
import { Button } from './style'
import PropTypes from 'prop-types'

export const SubmitButton = ({ disabled, children, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick} type='submit'>
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
