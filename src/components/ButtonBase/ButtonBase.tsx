import clsx from "clsx"
import { ButtonHTMLAttributes, forwardRef, HTMLAttributes, ReactNode } from "react"
import styles from './ButtonBase.module.scss'

export type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(( { children, className, ...rest }, ref) => {
  const classes = [styles['button-base']]

  if (className) {
    classes.push(className)
  }

  return (
    <button ref={ref} className={clsx(classes)} {...rest} >
      {children}
    </button>
  )
})

export default ButtonBase