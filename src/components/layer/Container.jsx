import React from 'react'
import cn from '../../lib/cn'

const Container = ({className,children}) => {
  return (
    <div className={cn('max-w-[1320px] mx-auto', className)}>
      {children}
    </div>
  )
}

export default Container
