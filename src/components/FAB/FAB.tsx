import clsx from "clsx"
import { HTMLAttributes, ReactNode } from "react"
import styles from './FAB.module.css'

export type FABProps = HTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'large',
  icon?: ReactNode,
  color: 'surface' | 'primary' | 'secondary' | 'tertiary'
}

const FAB = ({ icon, size, className, color, ...rest } : FABProps) => {
  const classes = [styles['fab'], styles[color]]

  if (size) {
    classes.push(styles[size])
  }

  if (className) {
    classes.push(className)
  }

  return (
    <button className={clsx(classes)} {...rest}>
      <div className="state-overlay"/>
      <div className="content">{icon}</div>
    </button>
  )
}

export default FAB