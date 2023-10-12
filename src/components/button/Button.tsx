import React from 'react'
import styles from '@/components/button/button.module.scss'
import { ButtonProps } from '@/types/buttonProps'

export default function Button({value, onClick, className, disabled}: ButtonProps): React.JSX.Element {
  return (
    <button onClick={onClick} className={styles[className]} disabled={disabled}>{value}</button>
  )
}
