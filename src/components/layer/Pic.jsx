import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../lib/cn'

const Pic = ({className,src,alt,href}) => {
  return (
    <Link to={href}>
        <picture className='picture'>
            <img src={src} alt={alt} className={cn(className)} />
        </picture>
    </Link>
  )
}

export default Pic
