import React from 'react'
import { cn } from '@/utils/cn';

const Button = () => {
  return (
    <button className={cn('btn', 'bg-red-500')}>
      Click me
    </button>
  )
}

export default Button
