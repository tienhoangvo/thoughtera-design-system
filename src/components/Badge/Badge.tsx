import clsx from "clsx"
import { HTMLAttributes, ReactNode } from "react"
import styles from './Badge.module.css'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children?: ReactNode,
  label?: string,
  variant: 'small' | 'large'
}

const Badge = ({ variant, className, children, label } : BadgeProps) => {

  const classes = [styles['badge'], styles[variant]]

  if (className) {
    classes.push(className)
  }

  if (!children) {
    classes.push(styles['no-icon'])
  }

  return (
    <span className={clsx(classes)}>
      {children}
      <span className="label">{label}</span>
    </span>
  )
}

export default Badge