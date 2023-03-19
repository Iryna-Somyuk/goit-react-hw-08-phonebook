import React from 'react'

export const Button = ({ children ='', hasBorder = false, isFilled = false }) => {
  return (
    <div>
      <Button className={``} >{ children }</Button>
    </div>
  )
}
