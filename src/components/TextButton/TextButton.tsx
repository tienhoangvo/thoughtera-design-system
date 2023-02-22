import clsx from "clsx"
import { forwardRef } from "react"
import Button, { type ButtonProps } from "../Button"
import styles from './TextButton.module.css'

export type TextButtonProps = ButtonProps

const TextButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...rest}, ref) => {
  let classes = [styles['text-button']]

  if (className) {
    classes.push(className)
  }

  return (
    <Button ref={ref} className={clsx(classes)} {...rest}>
      {children}
    </Button>
  )
})

export default TextButton