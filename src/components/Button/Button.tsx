import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'filled' | 'outlined' | 'text' | 'filled-tonal' | 'elevated',
  icon?: ReactNode,
  children: ReactNode,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, icon, children, ...rest }, ref) => {
  return (
    <button ref={ref} className={clsx(styles.button, styles[variant])} {...rest}>
      <div className={styles['state-overlay']} aria-hidden/>
      <div className={styles['content']}>
        {
          icon && <span className={styles.icon}>{icon}</span>
        }
        <span className={styles.label}>{children}</span>
      </div>
    </button>
  )
})

export default Button
