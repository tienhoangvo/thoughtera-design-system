import { ReactNode } from 'react'
import styles from './Button.module.css'
export type ButtonProps = {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>
}

export default Button
