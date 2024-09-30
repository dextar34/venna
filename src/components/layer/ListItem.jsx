import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({href,className,item}) => {
  return (
    <Link to={href}>
        <li className={className}>{item}</li>
    </Link>
  )
}

export default ListItem
