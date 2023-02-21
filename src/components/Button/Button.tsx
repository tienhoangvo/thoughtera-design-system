import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'filled' | 'outlined' | 'text' | 'filled-tonal' | 'elevated',
  icon?: ReactNode,
  children?: ReactNode,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'filled', icon, children, className, ...rest }, ref) => {
  let classes = [styles.button, styles[variant]]

  if (icon) {
    classes.push(styles['with-icon'])
  }

  if (className) {
    classes.push(className)
  }

  return (
    <button ref={ref} className={clsx(classes)} {...rest}>
      <div className={styles['state-overlay']} aria-hidden/>
      <div className={styles['content']}>
        {icon && icon}
        <span className={styles.label}>{children}</span>
      </div>
    </button>
  )
})

export default Button
