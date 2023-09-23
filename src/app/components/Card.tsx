import React from 'react'

interface CardProps {
  title: string
  description: string
  image: string
  link: string
}

function Card ({ title, description, image, link }: CardProps) {
  return (
    <div>Card</div>
  )
}

Card.propTypes = {}

export default Card
