import clsx from "clsx"
import { forwardRef, HTMLAttributes, ReactNode } from "react"
import styles from './ButtonBase.module.css'

export type ButtonBaseProps = HTMLAttributes<HTMLButtonElement> & {
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