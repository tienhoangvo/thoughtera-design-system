import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode,
  children?: ReactNode,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ icon, children, className, ...rest }, ref) => {
  let classes = [styles.button]

  if (icon) {
    classes.push('with-icon')
  }

  if (className) {
    classes.push(className)
  }

  return (
    <button ref={ref} className={clsx(classes)} {...rest}>
      <div className='state-overlay' aria-hidden/>
      <div className='content'>
        {icon && icon}
        <span className='label'>{children}</span>
      </div>
    </button>
  )
})

export default Button
