import React from 'react'

const IconWithLink = ({href,txt,type}) => {
  return (
    <div>
      <a href={href} target='_blank' type={type}>{txt}</a>
    </div>
  )
}

export default IconWithLink
